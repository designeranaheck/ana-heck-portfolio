import { ChangeDetectionStrategy, Component, computed, effect, inject, input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';

import { SiteHeader } from '../../../layout/site-header/site-header';
import { SiteFooter } from '../../../layout/site-footer/site-footer';
import { ARTICLES } from '../../../shared/data/articles';
import { LanguageService } from '../../../shared/i18n/language.service';

@Component({
  selector: 'app-artigo',
  imports: [RouterLink, SiteHeader, SiteFooter],
  templateUrl: './artigo.html',
  styleUrl: './artigo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Artigo {
  private readonly router = inject(Router);
  private readonly title = inject(Title);
  protected readonly i18n = inject(LanguageService);

  readonly slug = input.required<string>();

  private readonly rawArticle = computed(() =>
    ARTICLES.find((article) => article.slug === this.slug()),
  );

  protected readonly article = computed(() => {
    const article = this.rawArticle();
    if (!article) {
      return undefined;
    }
    const en = this.i18n.lang() === 'en';
    return {
      ...article,
      kicker: en ? article.kickerEn : article.kicker,
      title: en ? article.titleEn : article.title,
      meta: en ? article.metaEn : article.meta,
      coverCaption: en ? article.coverCaptionEn ?? article.coverCaption : article.coverCaption,
      coauthors: en ? article.coauthorsEn ?? article.coauthors : article.coauthors,
      body: en ? article.bodyEn : article.body,
    };
  });

  protected readonly otherArticles = computed(() => {
    const en = this.i18n.lang() === 'en';
    return ARTICLES.filter((article) => article.slug !== this.slug()).map((article) => ({
      ...article,
      title: en ? article.titleEn : article.title,
    }));
  });

  constructor() {
    effect(() => {
      const article = this.rawArticle();
      if (!article) {
        this.router.navigate(['/artigos']);
        return;
      }
      const en = this.i18n.lang() === 'en';
      this.title.setTitle(`${en ? article.titleEn : article.title} · Ana Heck`);
    });
  }
}
