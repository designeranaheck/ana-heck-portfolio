import { Injectable, signal } from '@angular/core';

import { UI_TEXT } from './ui-text';

export type Lang = 'pt' | 'en';

const STORAGE_KEY = 'ana-heck-lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Lang>(this.resolveInitialLang());

  setLang(lang: Lang): void {
    this.lang.set(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // localStorage unavailable (private browsing, etc.) — ignore.
    }
  }

  t(key: keyof typeof UI_TEXT): string {
    return UI_TEXT[key][this.lang()];
  }

  private resolveInitialLang(): Lang {
    if (typeof window === 'undefined') {
      return 'pt';
    }
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'pt' || stored === 'en') {
        return stored;
      }
    } catch {
      // ignore
    }
    return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'pt';
  }
}
