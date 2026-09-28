import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { SiteHeader } from '../../layout/site-header/site-header';
import { SiteFooter } from '../../layout/site-footer/site-footer';
import { ExperienceCard } from '../../ui/experience-card/experience-card';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';
import { ScrollToTop } from '../../shared/directives/scroll-to-top';
import { EXPERIENCES } from '../../shared/data/experiences';
import { CERTIFICATIONS, EDUCATION } from '../../shared/data/education';
import { TESTIMONIALS } from '../../shared/data/testimonials';
import { LanguageService } from '../../shared/i18n/language.service';

const COUNT_DURATION = 1200;
const TARGET_YEARS = 15;
const PHOTO_CROSSFADE_INTERVAL = 4500;

@Component({
  selector: 'app-home',
  imports: [RouterLink, SiteHeader, SiteFooter, ExperienceCard, RevealOnScroll, ScrollToTop],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home implements AfterViewInit, OnDestroy {
  protected readonly i18n = inject(LanguageService);

  protected readonly experiences = computed(() => {
    const en = this.i18n.lang() === 'en';
    return EXPERIENCES.map((item) => ({
      ...item,
      role: en ? item.roleEn : item.role,
      period: en ? item.periodEn : item.period,
      badge: en ? item.badgeEn : item.badge,
      description: en ? item.descriptionEn : item.description,
    }));
  });

  protected readonly education = computed(() => {
    const en = this.i18n.lang() === 'en';
    return EDUCATION.map((item) => ({
      ...item,
      institution: en && item.institutionEn ? item.institutionEn : item.institution,
      degree: en ? item.degreeEn : item.degree,
    }));
  });

  protected readonly certifications = computed(() => {
    const en = this.i18n.lang() === 'en';
    return CERTIFICATIONS.map((item) => ({
      ...item,
      title: en ? item.titleEn : item.title,
    }));
  });

  protected readonly testimonials = computed(() => {
    const en = this.i18n.lang() === 'en';
    return TESTIMONIALS.map((item) => ({
      ...item,
      quote: en ? item.quoteEn : item.quote,
    }));
  });

  protected readonly activePhoto = signal<0 | 1>(0);

  protected readonly experienceAtStart = signal(true);
  protected readonly experienceAtEnd = signal(false);

  private readonly years = signal(0);
  protected readonly yearsDisplay = computed(() => `+${this.years()} ${this.i18n.t('heroYearsSuffix')}`);

  private readonly stats = viewChild.required<ElementRef<HTMLElement>>('stats');
  private readonly experienceTrack = viewChild.required<ElementRef<HTMLElement>>('experienceTrack');

  private observer?: IntersectionObserver;
  private frame?: number;
  private photoTimer?: ReturnType<typeof setInterval>;

  ngAfterViewInit(): void {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || typeof IntersectionObserver === 'undefined') {
      this.years.set(TARGET_YEARS);
    } else {
      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.animateCounters();
              this.observer?.disconnect();
            }
          }
        },
        { threshold: 0.4 },
      );
      this.observer.observe(this.stats().nativeElement);
    }

    if (!reduceMotion) {
      this.photoTimer = setInterval(() => {
        this.activePhoto.update((current) => (current === 0 ? 1 : 0));
      }, PHOTO_CROSSFADE_INTERVAL);
    }

    this.updateExperienceScrollState();
    window.addEventListener('resize', this.updateExperienceScrollState);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.frame !== undefined) {
      cancelAnimationFrame(this.frame);
    }
    if (this.photoTimer !== undefined) {
      clearInterval(this.photoTimer);
    }
    window.removeEventListener('resize', this.updateExperienceScrollState);
  }

  protected scrollExperiences(direction: -1 | 1): void {
    this.experienceTrack().nativeElement.scrollBy({ left: direction * 400, behavior: 'smooth' });
  }

  protected readonly updateExperienceScrollState = (): void => {
    const el = this.experienceTrack().nativeElement;
    const maxScroll = el.scrollWidth - el.clientWidth;
    this.experienceAtStart.set(el.scrollLeft <= 1);
    this.experienceAtEnd.set(maxScroll <= 1 || el.scrollLeft >= maxScroll - 1);
  };

  private animateCounters(): void {
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / COUNT_DURATION);
      const eased = 1 - Math.pow(1 - progress, 3);
      this.years.set(Math.round(eased * TARGET_YEARS));
      if (progress < 1) {
        this.frame = requestAnimationFrame(step);
      }
    };
    this.frame = requestAnimationFrame(step);
  }
}
