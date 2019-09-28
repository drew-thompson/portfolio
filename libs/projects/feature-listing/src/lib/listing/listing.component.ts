import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
