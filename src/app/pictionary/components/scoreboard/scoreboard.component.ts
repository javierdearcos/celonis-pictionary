import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Score } from '../../common/score.interface';

@Component({
  selector: 'pictionary-scoreboard',
  templateUrl: './scoreboard.component.html',
})
export class ScoreboardComponent {
  @Input()
  turn: number = 0;
  @Output()
  updateScoreEvent: EventEmitter<Score> = new EventEmitter<Score>();

  public bubbleUpdateScoreEvent(score: Score): void {
    this.updateScoreEvent.emit(score);
  }
}
