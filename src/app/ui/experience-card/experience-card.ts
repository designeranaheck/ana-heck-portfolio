import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';

import { Experience } from '../../shared/models/portfolio.models';
import { LanguageService } from '../../shared/i18n/language.service';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceCard {
  protected readonly i18n = inject(LanguageService);
  readonly experience = input.required<Experience>();
  readonly bordered = input(false);
}
