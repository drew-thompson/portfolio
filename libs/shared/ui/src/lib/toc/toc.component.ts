import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-toc',
  templateUrl: './toc.component.html',
  styleUrls: ['./toc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TocComponent implements OnInit {
  /** i18n key pointing to the table of contents. */
  @Input() key: string;

  ngOnInit() {}
}
