// readonly.directive.ts
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appReadonly]'
})
export class ReadonlyDirective {
  constructor(private el: ElementRef) {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // Prevent any keypress that could modify the input value
    event.preventDefault();
  }
}