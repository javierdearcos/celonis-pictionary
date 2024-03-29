import { Component, EventEmitter, Output } from '@angular/core';

const CARD_DECK: string[] = [
  'Object Centric Data Model (OCDM)',
  'Knowledge Layer',
  'Business Miner',
  'Celonis Studio',
  'Process Explorer',
  'Process Co-pilot',
  'Execution Apps',
  'Action Flows',
  'Business Process Manager (Symbio)',
  'Process Adherence Manager',
  'Transformation Hub',
  'Intelligence API',
  'Orchestration Engine',
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
    this.cardPickedEvent.emit(this.card);
    this.display = 'none';
    this.loading = true;
    this.card = '';
    if (!this.cards.length) {
      this.cards = [...CARD_DECK];
    }
  }
}
