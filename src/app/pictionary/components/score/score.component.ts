import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Score } from '../../common/score.interface';

@Component({
  selector: 'pictionary-score',
  templateUrl: './score.component.html',
})
export class ScoreComponent {
  @Input()
  public teamName: string = '';
  @Input()
  public active: boolean = false;
  @Output()
  public updateScoreEvent: EventEmitter<Score> = new EventEmitter<Score>();
  public score: number = 0;

  public incrementScore(): void {
    this.score++;
    this.updateScoreEvent.emit({ teamName: this.teamName, score: this.score });
  }

  public decrementScore(): void {
    if (!this.score) {
      return;
    }

    this.score--;
    this.updateScoreEvent.emit({ teamName: this.teamName, score: this.score });
  }
}
