import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html'
})
export class Square {
  @Input() value: (string | null) = null
  @Output() onClick = new EventEmitter<string>()

  jumpTo(step: number) {
    console.log(step)
  }
}