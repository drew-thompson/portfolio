import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Timestamp } from '@portfolio/data/models';

@Component({
  selector: 'shared-timestamp',
  templateUrl: './timestamp.component.html',
  styleUrls: ['./timestamp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimestampComponent {
  /** Time to display. */
  @Input() time: Timestamp;
  /** Format of transformed date. */
  @Input() format = 'MMM yyyy';
}
