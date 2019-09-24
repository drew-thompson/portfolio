import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Post } from '@portfolio/data/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private db: AngularFirestore) {}

  getPosts(): Observable<Post[]> {
    return this.db.collection<Post>('posts').valueChanges();
  }
}
