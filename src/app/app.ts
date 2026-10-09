import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AiChat } from './ui/ai-chat/ai-chat';
import { FigmaCursor } from './ui/figma-cursor/figma-cursor';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FigmaCursor, AiChat],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
