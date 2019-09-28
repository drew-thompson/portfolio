import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-styleguide',
  templateUrl: './styleguide.component.html',
  styleUrls: ['./styleguide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StyleguideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
