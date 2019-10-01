import { CdkScrollable } from '@angular/cdk/overlay';
import { AfterContentInit, AfterViewInit, ApplicationRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { NavigationEnd, Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { TranslateService } from '@ngx-translate/core';
import { SidenavService } from '@portfolio/common/services';
import { Link } from '@portfolio/data/models';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, first, map, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentInit {
  @ViewChild(MatSidenav, { static: true }) sidenav: MatSidenav;
  @ViewChild(CdkScrollable, { static: true }) sidenavContent: CdkScrollable;

  dateClicked$: Subject<Date> = new BehaviorSubject<Date>(new Date(0));
  timestamp$: Subject<string> = new Subject<string>();

  isAtTop$: Observable<boolean>;
  links$: Observable<Link[]>;

  constructor(
    private router: Router,
    private translate: TranslateService,
    private appRef: ApplicationRef,
    private sidenavService: SidenavService,
    private updates: SwUpdate
  ) {
    this.links$ = this.translate.get('links');

    this.appRef.isStable.pipe(first(stable => stable)).subscribe(() => {
      console.log('App is stable now');
    });

    this.updates.available.subscribe(a => {
      console.log(a);
      if (confirm('Reload page to update to latest version of site?')) {
        this.updates.activateUpdate().then(() => document.location.reload());
      }
    });
  }

  ngOnInit() {
    // this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => this.scrollToUrlFragment());
  }

  ngAfterViewInit() {
    this.sidenavService.set(this.sidenav);
    // this.scrollToUrlFragment();
  }

  ngAfterContentInit() {
    this.isAtTop$ = this.sidenavContent.elementScrolled().pipe(
      map(() => this.isAtTop()),
      tap(() => window.dispatchEvent(new Event('resize'))),
      startWith(this.isAtTop())
    );
  }

  /**
   * Update the date the demo button was last clicked.
   */
  updateDateClicked(): void {
    this.dateClicked$.next(new Date());
  }

  private isAtTop(): boolean {
    return this.sidenavContent.measureScrollOffset('top') === 0;
  }

  private scrollToUrlFragment(): void {
    const tree = this.router.parseUrl(this.router.url);
    if (tree.fragment) {
      const element = document.querySelector('#' + tree.fragment);
      console.log(element);
      if (element) {
        element.scrollIntoView(true);
      }
    }
  }
}
