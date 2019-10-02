import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { ProjectMin } from '@portfolio/data/models';

@Component({
  selector: 'portfolio-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCardComponent {
  @HostBinding('class.portfolio-project-card') on = true;
  /** Project to render. */
  @Input() project: ProjectMin;
  /** Routerlink override.  */
  @Input() url: string;

  getUrl(): string {
    if (this.url) {
      return this.url;
    }
    return this.project.url;
  }
}
