import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Project } from '@portfolio/data/models';
import { ProjectsService } from '@portfolio/projects/data-access';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectResolver implements Resolve<Project> {
  constructor(private projectsService: ProjectsService) {}

  resolve(next: ActivatedRouteSnapshot): Observable<Project> {
    const id = next.paramMap.get('id');

    return this.projectsService.getProjectValueChanges(id).pipe(
      take(1) // Must take first emitted value when resolving
    );
  }
}
