import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SidenavService } from '@portfolio/common/services';

@Component({
  selector: 'portfolio-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  /** Whether the header should be in its extended state. */
  @Input() extended: boolean;

  constructor(public sidenavService: SidenavService) {}
}
