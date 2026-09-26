import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';
import { LanguageService } from '../../shared/i18n/language.service';

interface ContactChannel {
  icon: 'email' | 'whatsapp' | 'resume';
  label: string;
  hint: string;
  value: string;
  href: string;
}

@Component({
  selector: 'app-contact-section',
  imports: [RevealOnScroll],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSection {
  protected readonly i18n = inject(LanguageService);

  protected readonly channels = computed<ContactChannel[]>(() => [
    {
      icon: 'email',
      label: this.i18n.t('contactEmailLabel'),
      hint: this.i18n.t('contactEmailHint'),
      value: 'anaheckk@gmail.com',
      href: 'mailto:anaheckk@gmail.com',
    },
    {
      icon: 'whatsapp',
      label: this.i18n.t('contactWhatsappLabel'),
      hint: this.i18n.t('contactWhatsappHint'),
      value: '+55 48 99913-6869',
      href: 'https://wa.me/5548999136869',
    },
    {
      icon: 'resume',
      label: this.i18n.t('contactResumeLabel'),
      hint: this.i18n.t('contactResumeHint'),
      value: this.i18n.t('contactResumeValue'),
      href: '/assets/curriculo/ana-heck-curriculo.pdf',
    },
  ]);
}
