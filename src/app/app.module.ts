import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Game } from '../components/game/game.component';
import { Board } from '../components/board/board.component';
import { Square } from '../components/square/square.component';

@NgModule({
  declarations: [
    Game,
    Board,
    Square
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [Game]
})
export class AppModule { }
