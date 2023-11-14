// no-whitespace.directive.ts
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoWhitespace]'
})
export class NoWhitespaceDirective {
  @HostListener('input', ['$event'])
  onInput(event: InputEvent) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/\s/g, '');
  }
}