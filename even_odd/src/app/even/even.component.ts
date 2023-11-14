import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-even',
  template: '',
})
export class EvenComponent implements OnInit {
  @Output() evenNumber = new EventEmitter<number>();
  private interval: any;
  private counter = 2;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.evenNumber.emit(this.counter);
      this.counter += 2;
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}