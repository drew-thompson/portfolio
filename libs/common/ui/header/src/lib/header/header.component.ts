import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SidenavService } from '@portfolio/common/services';

@Component({
  selector: 'portfolio-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  constructor(public sidenavService: SidenavService) {}

  ngOnInit() {}
}
