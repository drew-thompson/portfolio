import {
  ApplicationRef,
  Directive,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subscription, timer } from 'rxjs';
import { first, take } from 'rxjs/operators';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[timeFromNow]'
})
export class TimeFromNowDirective implements OnChanges, OnInit, OnDestroy {
  @Input() created: Date | string | number;
  /**
   * Translation key for available timestamps, in the format:
   * @example
   * [
   * "0": "< 1 minute ago",
   * "1": "1 minute ago",
   * "2": "minutes ago",
   * "3": "1 hour ago",
   * "4": "hours ago",
   * "5": "1 day ago",
   * "6": "days ago",
   * "7": "1 month ago",
   * "8": "months ago",
   * "9": "1 year ago",
   * "10": "years ago"
   * ]
   */
  @Input() i18nKey = 'timestamps';

  @Output() timeUpdated: EventEmitter<string> = new EventEmitter<string>();

  private createdTime: number;
  private timer: Observable<number>;
  private timerSubscription: Subscription;
  private updateInterval: number;

  private labels: string[];

  constructor(
    private translate: TranslateService,
    private appRef: ApplicationRef
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    const created = changes.created;
    if (created) {
      if (created.isFirstChange()) {
        this.appRef.isStable
          .pipe(first(stable => stable))
          .subscribe(() => this.init());
      } else {
        this.reset();
      }
    }
  }

  ngOnInit() {
    this.translate
      .get(this.i18nKey)
      .pipe(take(1))
      .subscribe(labels => (this.labels = labels));
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  private reset(): void {
    this.stopTimer();
    this.init();
  }

  private init(): void {
    const created = this.getNormalizedDate();
    this.createdTime = created.getTime();
    const now = new Date();
    const seconds = this.round((now.getTime() - this.createdTime) / 1000);
    this.updateInterval = Number.isNaN(seconds)
      ? 1000
      : this.getUpdatePeriod(seconds) * 1000;
    this.startTimer(this.updateInterval);
  }

  /**
   * Ensure that the value passed in is or becomes a Date object.
   *
   * @param Initial reference time for directive calculations
   */
  private getNormalizedDate(): Date {
    let normalized: Date;
    if (this.created instanceof Date) {
      return this.created;
    } else if (
      typeof this.created === 'number' ||
      typeof this.created === 'string'
    ) {
      normalized = new Date(this.created);
    }
    return normalized;
  }

  private stopTimer(): void {
    this.timerSubscription.unsubscribe();
  }

  /**
   * Initialize or, when an interval width changes, reset the timer.
   *
   * @param interval Width in seconds until next check
   */
  private startTimer(interval: number): void {
    this.timer = timer(0, interval);
    this.timerSubscription = this.timer.subscribe(_ => {
      const now = new Date();
      const seconds = this.round((now.getTime() - this.createdTime) / 1000);
      const nextInterval = this.getUpdatePeriod(seconds) * 1000;

      // Interval border detected, need to reset with new interval
      if (nextInterval !== this.updateInterval) {
        this.updateInterval = nextInterval;
        this.stopTimer();
        this.startTimer(this.updateInterval);
      }

      this.timeUpdated.emit(this.getLabel(seconds));
    });
  }

  /**
   * Get label based on time away from given created date.
   *
   * @param seconds Seconds from input reference point
   * @returns Label to display
   */
  private getLabel(seconds: number): string {
    const minutes = this.round(seconds / 60);
    const hours = this.round(minutes / 60);
    const days = this.round(hours / 24);
    const months = this.round(days / 30.416);
    const years = this.round(days / 365);

    if (Number.isNaN(seconds)) {
      return '';
    } else if (seconds <= 45) {
      return this.labels[0];
    } else if (seconds <= 90) {
      return this.labels[1];
    } else if (minutes <= 45) {
      return `${minutes} ${this.labels[2]}`;
    } else if (minutes <= 90) {
      return this.labels[3];
    } else if (hours <= 22) {
      return `${hours} ${this.labels[4]}`;
    } else if (hours <= 36) {
      return this.labels[5];
    } else if (days <= 25) {
      return `${days} ${this.labels[6]}`;
    } else if (days <= 45) {
      return this.labels[7];
    } else if (days <= 345) {
      return `${months} ${this.labels[8]}`;
    } else if (days <= 545) {
      return this.labels[9];
    } else {
      // (days > 545)
      return `${years} ${this.labels[10]}`;
    }
  }

  /**
   * Defines and returns period of time after which to check for label changes.
   *
   * @param seconds Seconds from input reference point
   * @returns Active timer interval
   */
  private getUpdatePeriod(seconds: number): number {
    const minutes = 60;
    const hours = minutes * 60;
    const days = hours * 24;
    if (seconds < minutes) {
      // Less than 1 min, update every 2 secs
      return 2;
    } else if (seconds < hours) {
      // Less than an hour, update every 30 secs
      return 30;
    } else if (seconds < days) {
      // Less then a day, update every 5 mins
      return 300;
    } else {
      // Update every hour
      return 3600;
    }
  }

  /**
   * Make positive and round up a given number.
   *
   * @param value Value to round
   * @returns Rounded value
   */
  private round(value: number): number {
    return Math.round(Math.abs(value));
  }
}
