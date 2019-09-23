import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input
} from '@angular/core';
import { Post } from '@portfolio/data/models';

@Component({
  selector: 'portfolio-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostCardComponent {
  @HostBinding('class.portfolio-post-card') on = true;

  @Input() post: Post;
}
