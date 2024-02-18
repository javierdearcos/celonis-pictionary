import { Component, EventEmitter, Input, Output } from '@angular/core';
import { STEP } from '../../common/step.enum';

@Component({
  selector: 'pictionary-game-guidance',
  templateUrl: './game-guidance.component.html',
})
export class GameGuidanceComponent {
  StepType = STEP;

  @Input()
  activeTeam: string = '';
  @Input()
  currentStep: STEP = STEP.PICK_A_CARD;
  @Output()
  cardPickedEvent: EventEmitter<string> = new EventEmitter<string>();

  bubbleCardPicked(card: string): void {
    this.cardPickedEvent.emit(card);
  }
}
