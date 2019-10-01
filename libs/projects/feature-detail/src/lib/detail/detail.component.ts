import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '@portfolio/data/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'portfolio-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent implements OnInit {
  project$: Observable<Project>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.project$ = this.route.data.pipe(map((data: { project: Project }) => data.project));
  }

  getContext(project: Project): object {
    return { $implicit: project };
  }

  getTheme(project: Project): string {
    return project.color || '';
  }
}
