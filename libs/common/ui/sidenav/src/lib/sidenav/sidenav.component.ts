import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Link } from '@portfolio/data/models';

@Component({
  selector: 'portfolio-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {
  /** Links to display. */
  @Input() links: Link[];
}
