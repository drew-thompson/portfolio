import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SidenavService } from '@portfolio/common/services';
import { Link } from '@portfolio/data/models';

@Component({
  selector: 'portfolio-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  /** Whether the header should be in its extended state. */
  @Input() extended: boolean;
  /** Links to be displayed for navigation. */
  @Input() links: Link[];

  constructor(public sidenavService: SidenavService) {}
}
