import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { angularFirestoreStub } from '@portfolio/testing/utils';
import { BlogService } from './blog.service';

describe('BlogService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [],
      providers: [{ provide: AngularFirestore, useValue: angularFirestoreStub }]
    })
  );

  it('should be created', () => {
    const service: BlogService = TestBed.get(BlogService);
    expect(service).toBeTruthy();
  });
});
