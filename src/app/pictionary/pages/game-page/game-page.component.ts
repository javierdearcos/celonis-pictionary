import { Component } from '@angular/core';
import { STEP } from '../../common/step.enum';
import { Score } from '../../common/score.interface';

const TEAMS: string[] = ['Team A', 'Team B'];

interface PictionaryScore {
  teamA: number;
  teamB: number;
}

@Component({
  selector: 'pictionary-game-page',
  templateUrl: './game-page.component.html',
})
export class GamePageComponent {
  StepType = STEP;

  round: number = 1;
  turn: number = 0;
  activeTeam: string = TEAMS[0];
  currentStep: STEP = STEP.PICK_A_CARD;
  currentCard: string = '';
  currentScore: PictionaryScore = {
    teamA: 0,
    teamB: 0,
  };

  cardPicked(card: string): void {
    this.currentStep = STEP.GUESS;
    this.currentCard = card;
  }

  endOfTurn(): void {
    this.turn++;
    this.currentStep = STEP.UPDATE_SCORES;
  }

  scoreUpdated(score: Score): void {
    if (score.teamName === 'Team A') {
      this.currentScore.teamA = score.score;
    } else {
      this.currentScore.teamB = score.score;
    }
    this.round = 1 + Math.floor(this.turn / 2);
    this.activeTeam = TEAMS[this.turn % 2];
    this.currentStep = STEP.PICK_A_CARD;
  }

  getWinner(): string {
    return this.currentScore.teamA > this.currentScore.teamB
      ? 'Team A'
      : 'Team B';
  }
}
