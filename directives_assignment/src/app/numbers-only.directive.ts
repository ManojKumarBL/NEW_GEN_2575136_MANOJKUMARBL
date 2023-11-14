// numbers-only.directive.ts
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]'
})
export class NumbersOnlyDirective {
  @HostListener('input', ['$event'])
  onInput(event: InputEvent) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
  }
}