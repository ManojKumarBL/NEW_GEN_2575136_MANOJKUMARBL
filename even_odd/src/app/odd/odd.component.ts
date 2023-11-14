import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  @Output() oddNumber = new EventEmitter<number>();
  private interval: any;
  private counter = 1;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.oddNumber.emit(this.counter);
      this.counter += 2;
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
