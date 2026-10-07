import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter, map } from 'rxjs/operators';

import { Lang, LanguageService } from '../../shared/i18n/language.service';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:click)': 'onDocumentClick($event)',
    '(document:keydown.escape)': 'langMenuOpen.set(false)',
  },
})
export class SiteHeader {
  private readonly router = inject(Router);
  protected readonly i18n = inject(LanguageService);

  private readonly url = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  protected readonly langMenuOpen = signal(false);
  protected readonly otherLangs = computed<Lang[]>(() =>
    (['pt', 'en'] as Lang[]).filter((l) => l !== this.i18n.lang()),
  );

  protected pickLang(lang: Lang): void {
    this.i18n.setLang(lang);
    this.langMenuOpen.set(false);
  }

  protected readonly isPortfolioActive = computed(
    () => this.url().startsWith('/portfolio') || this.url().startsWith('/artigos'),
  );

  protected onDocumentClick(event: MouseEvent): void {
    if (!(event.target as HTMLElement).closest('.lang-switch')) {
      this.langMenuOpen.set(false);
    }
  }
}
