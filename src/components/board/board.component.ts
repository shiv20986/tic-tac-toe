import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html'
})
export class Board {
  @Input() squares: (string | null)[] = [];
  @Output() onClick = new EventEmitter<number>()

  constructor() {
  }

  // onClick (index) {
  //   // this.onSquareClick(index)
  // }

  jumpTo(step: number) {
    console.log(step)
  }
}