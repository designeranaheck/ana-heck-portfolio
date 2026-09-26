import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { ContactSection } from '../../ui/contact-section/contact-section';
import { ScrollToTop } from '../../shared/directives/scroll-to-top';
import { LanguageService } from '../../shared/i18n/language.service';

@Component({
  selector: 'app-site-footer',
  imports: [ContactSection, ScrollToTop],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooter {
  protected readonly i18n = inject(LanguageService);
  protected readonly year = new Date().getFullYear();
  protected readonly roleLine = computed(() =>
    this.i18n.lang() === 'en'
      ? 'Ana Heck · Senior Product Designer · Criciúma, Brazil'
      : 'Ana Heck · Sênior Product Designer · Criciúma, SC',
  );
}
