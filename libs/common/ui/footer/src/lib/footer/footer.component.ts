import { ChangeDetectionStrategy, Component } from '@angular/core';
import { version } from '../../../../../../../package.json';

@Component({
  selector: 'portfolio-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  version: string = version;
}
