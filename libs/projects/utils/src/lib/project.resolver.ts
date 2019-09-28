import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Project } from '@portfolio/data/models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectResolver implements Resolve<Project> {
  resolve(): Observable<Project> {
    return of({ title: 'hi' } as Project);
  }
}
