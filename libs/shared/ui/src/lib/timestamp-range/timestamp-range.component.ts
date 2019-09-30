import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Timestamp } from '@portfolio/data/models';

@Component({
  selector: 'shared-timestamp-range',
  templateUrl: './timestamp-range.component.html',
  styleUrls: ['./timestamp-range.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimestampRangeComponent {
  /** Beginning date of range. */
  @Input() start: Timestamp;
  /** End date of range - may be `null`. */
  @Input() end: Timestamp;
  /** Format of transformed date. */
  @Input() format = 'MMM yyyy';
}
