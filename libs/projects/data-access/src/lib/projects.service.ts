import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Project } from '@portfolio/data/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(private db: AngularFirestore) {}

  getProjects(): Observable<Project[]> {
    return this.db
      .collection<Project>('projects', ref => ref.orderBy('index', 'asc'))
      .valueChanges();
  }
}
