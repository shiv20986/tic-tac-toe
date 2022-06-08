import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html'
})
export class Game implements OnInit {
  constructor(private gameService: GameService) {
  }
  history: ({squares: (string | null)[]})[] = [
    {
      squares: Array(9).fill(null)
    }
  ]
  stepNumber = 0
  xIsNext = true
  winner = null
  
  ngOnInit(): void {
  }

  handleClick(index: number) {
    const history = this.history.slice(0, this.stepNumber + 1);
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    const winner = this.getWinner()
    if (winner || squares[index]) {
      return;
    }
    squares[index] = this.xIsNext ? "X" : "O"
    this.history = history.concat([
      {
        squares: squares
      }
    ])
    this.stepNumber = history.length
    this.xIsNext = !this.xIsNext
  }

  jumpTo(step: number) {
    this.stepNumber = step
    this.xIsNext = !(step % 2)
  }

  getWinner (): (string | null) {
    const {history, stepNumber} = this
    return this.gameService.calculateWinner(history[stepNumber].squares)
  }
}