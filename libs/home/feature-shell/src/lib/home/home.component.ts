import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BlogService } from '@portfolio/blog/data-access';
import { Post, Project, Topic } from '@portfolio/data/models';
import { ProjectsService } from '@portfolio/projects/data-access';
import { Observable } from 'rxjs';

@Component({
  selector: 'portfolio-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  topics$: Observable<Topic[]>;
  projects$: Observable<Project[]>;
  posts$: Observable<Post[]>;

  constructor(
    private projectsService: ProjectsService,
    private blogService: BlogService
  ) {}

  ngOnInit() {
    this.projects$ = this.projectsService.getProjects();
    this.posts$ = this.blogService.getPosts();
  }

  getImage(path: string): string {
    return `assets/images/${path}`;
  }

  isOdd(index: number): boolean {
    return index % 2 !== 0;
  }
}
