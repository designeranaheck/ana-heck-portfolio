import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SiteHeader } from '../../layout/site-header/site-header';
import { SiteFooter } from '../../layout/site-footer/site-footer';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';
import { TOOLS } from '../../shared/data/tools';
import { ARTICLES } from '../../shared/data/articles';
import { LanguageService } from '../../shared/i18n/language.service';

@Component({
  selector: 'app-portfolio',
  imports: [RouterLink, SiteHeader, SiteFooter, RevealOnScroll],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Portfolio {
  protected readonly i18n = inject(LanguageService);

  protected readonly tools = TOOLS;

  protected readonly articles = computed(() => {
    const en = this.i18n.lang() === 'en';
    return ARTICLES.map((article) => ({
      ...article,
      kicker: en ? article.kickerEn : article.kicker,
      listDate: en ? article.listDateEn : article.listDate,
      listTitle: en ? article.listTitleEn : article.listTitle,
      listExcerpt: en ? article.listExcerptEn : article.listExcerpt,
    }));
  });
}
