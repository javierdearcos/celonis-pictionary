import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pictionary-game-ender',
  templateUrl: './game-ender.component.html',
  styles: [' .modal{background: rgba(0,0,0, .5); } '],
})
export class GameEnderComponent {
  @Input()
  winner: string = '';
  display: string = 'none';

  openModal(): void {
    this.display = 'block';
  }
}
