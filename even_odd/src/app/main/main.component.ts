import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `<button (click)="start()">Start</button>
  <button (click)="stop()">Stop</button>
  <div *ngIf="oddNumbers.length > 0">
    <h3>Odd Numbers:</h3>
    <ul>
      <li *ngFor="let number of oddNumbers">{{ number }}</li>
    </ul>
  </div>
  <div *ngIf="evenNumbers.length > 0">
    <h3>Even Numbers:</h3>
    <ul>
      <li *ngFor="let number of evenNumbers">{{ number }}</li>
    </ul>
  </div>
  `,
})
export class MainComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  start() {
    this.oddNumbers = [];
    this.evenNumbers = [];
  }

  stop() {
    
  }

  onOddNumber(number: number) {
    this.oddNumbers.push(number);
  }

  onEvenNumber(number: number) {
    this.evenNumbers.push(number);
  }
}