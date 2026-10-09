import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, afterNextRender, inject } from '@angular/core';

@Component({
  selector: 'app-figma-cursor',
  templateUrl: './figma-cursor.html',
  styleUrl: './figma-cursor.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FigmaCursor {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;

      const root = document.documentElement;
      const move = (e: MouseEvent) => {
        this.el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        this.el.classList.add('is-visible');
      };
      const hide = () => this.el.classList.remove('is-visible');
      const down = () => this.el.classList.add('is-pressed');
      const up = () => this.el.classList.remove('is-pressed');

      root.classList.add('has-figma-cursor');
      document.addEventListener('mousemove', move, { passive: true });
      document.addEventListener('mousedown', down);
      document.addEventListener('mouseup', up);
      document.documentElement.addEventListener('mouseleave', hide);

      this.destroyRef.onDestroy(() => {
        root.classList.remove('has-figma-cursor');
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mousedown', down);
        document.removeEventListener('mouseup', up);
        root.removeEventListener('mouseleave', hide);
      });
    });
  }
}
