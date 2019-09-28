import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Project } from '@portfolio/data/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(private db: AngularFirestore) {}

  /**
   * Return all projects stored in the Firestore, ordered by index.
   */
  getProjects(): Observable<Project[]> {
    return this.db.collection<Project>('projects', ref => ref.orderBy('index', 'asc')).valueChanges();
  }

  /**
   * Get a specific project with a given uid. This instance will react directly to changes made in the database.
   * @param url Url of the project, which acts as a uid
   */
  getProjectValueChanges(url: string): Observable<Project> {
    return this.getProjects().pipe(map(projects => projects.find(p => p.url === url)));
  }
}
