import { Component, EventEmitter, Output } from '@angular/core';

const CARD_DECK: string[] = [
  'Process Adherence Manager',
  'Transformation Hub',
  'Studio',
  'Copilot',
];

@Component({
  selector: 'pictionary-card-picker',
  templateUrl: './card-picker.component.html',
  styles: [' .modal{background: rgba(0,0,0, .5); } '],
})
export class CardPickerComponent {
  private cards: string[] = [...CARD_DECK];

  @Output()
  cardPickedEvent: EventEmitter<string> = new EventEmitter<string>();

  display: string = 'none';
  loading: boolean = true;
  card: string = '';

  openModal(): void {
    this.display = 'block';
    setTimeout(() => {
      this.getCard();
    }, 1000);
  }

  getCard(): void {
    this.card = this.cards.splice(
      Math.floor(Math.random() * this.cards.length),
      1
    )[0];
    this.loading = false;
  }

  closeModal(): void {
    this.display = 'none';
    this.loading = true;
    this.card = '';
    if (!this.cards.length) {
      this.cards = [...CARD_DECK];
    }
    this.cardPickedEvent.emit(this.card);
  }
}
