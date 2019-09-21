import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Topic } from '@portfolio/data/models';

@Component({
  selector: 'portfolio-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopicComponent {
  /** Topic to be selected. */
  @Input() topic: Topic;
}
