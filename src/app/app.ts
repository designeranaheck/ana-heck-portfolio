import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FigmaCursor } from './ui/figma-cursor/figma-cursor';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FigmaCursor],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
