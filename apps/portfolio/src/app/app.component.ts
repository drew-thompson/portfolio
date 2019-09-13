import { ApplicationRef, Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { TranslateService } from '@ngx-translate/core';
import { Message, Person } from '@portfolio/api-interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hello$: any;
  items$: Observable<Person[]>;

  dateClicked$: Subject<Date> = new BehaviorSubject<Date>(new Date(0));
  timestamp$: Subject<string> = new Subject<string>();

  constructor(
    private translate: TranslateService,
    private db: AngularFirestore,
    private fns: AngularFireFunctions,
    private appRef: ApplicationRef
  ) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');

    this.appRef.isStable.pipe(first(stable => stable)).subscribe(() => {
      console.log('App is stable now');
      const hello = this.fns.httpsCallable('api/hello');
      this.hello$ = hello({ name: 'bob' }) as Observable<Message>;
    });
  }

  ngOnInit() {
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
  }

  /**
   * Update the date the demo button was last clicked.
   */
  updateDateClicked(): void {
    this.dateClicked$.next(new Date());
  }
}
