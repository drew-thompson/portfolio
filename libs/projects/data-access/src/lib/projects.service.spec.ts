import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import {
  AngularFirestore,
  AngularFirestoreModule
} from '@angular/fire/firestore';
import { angularFirestoreStub } from '@portfolio/testing/utils';
import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  let db: AngularFirestore;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularFirestoreModule, HttpClientTestingModule],
      providers: [{ provide: AngularFirestore, useValue: angularFirestoreStub }]
    });
    db = TestBed.get(AngularFirestore);
  });

  it('should be created', () => {
    const service: ProjectsService = TestBed.get(ProjectsService);
    expect(service).toBeTruthy();
  });
});
