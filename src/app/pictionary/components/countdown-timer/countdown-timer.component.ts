import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription, interval } from 'rxjs';

interface Time {
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'pictionary-countdown-timer',
  templateUrl: './countdown-timer.component.html',
})
export class CountdownTimerComponent implements OnInit {
  public time!: Time;
  private subscription!: Subscription;
  @Input()
  private minutes: number = 1;
  @Output()
  private endOfTurnEvent: EventEmitter<void> = new EventEmitter<void>();

  public ngOnInit(): void {
    this.time = {
      minutes: this.minutes,
      seconds: 0,
    };
  }

  public start(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = interval(1000).subscribe(() => this.countdown());
  }

  public stop(): void {
    if (this.subscription) {
      this.endOfTurnEvent.emit();
      this.subscription.unsubscribe();
      this.time = {
        minutes: this.minutes,
        seconds: 0,
      };
    }
  }

  private countdown(): void {
    if (this.time.seconds > 0) {
      this.time.seconds--;
    } else if (this.time.minutes > 0) {
      this.time.minutes--;
      this.time.seconds = 59;
    } else {
      this.playEndSound();
      this.endOfTurnEvent.emit();
      this.subscription.unsubscribe();
      this.time = {
        minutes: this.minutes,
        seconds: 0,
      };
    }
  }

  private playEndSound(): void {
    const audio = new Audio('../../../assets/audio/timer-end.mp3');
    audio.load();
    audio.play();
  }
}
