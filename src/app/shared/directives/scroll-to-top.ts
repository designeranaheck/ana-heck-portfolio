import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'a[appScrollToTop]',
})
export class ScrollToTop {
  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    event.preventDefault();
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  }
}
