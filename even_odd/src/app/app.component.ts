import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onOddNumber(number: number) {
    this.oddNumbers.push(number);
  }

  onEvenNumber(number: number) {
    this.evenNumbers.push(number);
  }
}