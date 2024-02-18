import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';
import { InstructionsPageComponent } from './pages/instructions-page/instructions-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { PictionaryRoutingModule } from './pictionary-routing.module';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { ScoreComponent } from './components/score/score.component';
import { CardPickerComponent } from './components/card-picker/card-picker.component';
import { GameGuidanceComponent } from './components/game-guidance/game-guidance.component';
import { GameEnderComponent } from './components/game-ender/game-ender.component';



@NgModule({
  declarations: [
    HomePageComponent,
    CountdownTimerComponent,
    InstructionsPageComponent,
    GameEnderComponent,
    GamePageComponent,
    ScoreboardComponent,
    ScoreComponent,
    CardPickerComponent,
    GameGuidanceComponent
  ],
  imports: [
    CommonModule,
    PictionaryRoutingModule
  ],
  exports: [
    HomePageComponent,
    GamePageComponent
  ]
})
export class PictionaryModule { }
