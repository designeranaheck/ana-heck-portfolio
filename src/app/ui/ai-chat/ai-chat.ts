import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  effect,
  inject,
  signal,
  viewChild,
} from '@angular/core';

import { LanguageService } from '../../shared/i18n/language.service';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

@Component({
  selector: 'app-ai-chat',
  templateUrl: './ai-chat.html',
  styleUrl: './ai-chat.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(document:keydown.escape)': 'open.set(false)' },
})
export class AiChat {
  protected readonly i18n = inject(LanguageService);
  private readonly http = inject(HttpClient);

  protected readonly open = signal(false);
  protected readonly loading = signal(false);
  protected readonly messages = signal<ChatMessage[]>([]);
  protected readonly draft = signal('');
  protected readonly suggestions = computed(() => [
    this.i18n.t('chatSuggestion1'),
    this.i18n.t('chatSuggestion2'),
    this.i18n.t('chatSuggestion3'),
  ]);

  private readonly log = viewChild<ElementRef<HTMLElement>>('log');

  constructor() {
    effect(() => {
      this.messages();
      this.loading();
      queueMicrotask(() => {
        const el = this.log()?.nativeElement;
        if (el) el.scrollTop = el.scrollHeight;
      });
    });
  }

  protected submit(event?: Event): void {
    event?.preventDefault();
    this.send(this.draft());
  }

  protected send(text: string): void {
    const content = text.trim();
    if (!content || this.loading()) return;

    this.draft.set('');
    this.messages.update((m) => [...m, { role: 'user', content }]);
    this.loading.set(true);

    this.http.post<{ reply: string }>('/api/chat', { messages: this.messages() }).subscribe({
      next: ({ reply }) => this.finish(reply),
      error: () => this.finish(this.i18n.t('chatError')),
    });
  }

  private finish(reply: string): void {
    this.messages.update((m) => [...m, { role: 'assistant', content: reply }]);
    this.loading.set(false);
  }
}
