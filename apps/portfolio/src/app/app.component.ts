import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { TranslateService } from '@ngx-translate/core';
import { Message, Person } from '@portfolio/api-interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hello$: any;
  items$: Observable<Person[]>;

  constructor(
    private http: HttpClient,
    private translate: TranslateService,
    private db: AngularFirestore,
    private fns: AngularFireFunctions
  ) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');

    const unsortedItems$ = this.db
      .collection('items')
      .valueChanges() as Observable<Person[]>;
    const peopleAlphabetically = (a: Person, b: Person) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    };

    this.items$ = unsortedItems$.pipe(
      map(items => items.sort(peopleAlphabetically))
    );

    const hello = this.fns.httpsCallable('api/hello');
    this.hello$ = hello({ name: 'bob' }) as Observable<Message>;
  }
}
