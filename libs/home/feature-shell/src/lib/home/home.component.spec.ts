import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterTestingModule } from '@angular/router/testing';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService
} from '@ngx-translate/core';
import { BlogService } from '@portfolio/blog/data-access';
import { BlogUiModule } from '@portfolio/blog/ui';
import { HttpLoaderFactory } from '@portfolio/core/config';
import { HomeUiModule } from '@portfolio/home/ui';
import { ProjectsService } from '@portfolio/projects/data-access';
import { ProjectsUiModule } from '@portfolio/projects/ui';
import { SharedModule } from '@portfolio/shared';
import { SharedUiModule } from '@portfolio/shared/ui';
import { angularFirestoreStub } from '@portfolio/testing/utils';
import { of } from 'rxjs';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let translate: TranslateService;
  let fixture: ComponentFixture<HomeComponent>;
  let http: HttpTestingController;
  let projectsService: ProjectsService;
  let blogService: BlogService;
  let angularFirestore: AngularFireModule;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FlexLayoutModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }),
        SharedModule,
        SharedUiModule,
        HomeUiModule,
        BlogUiModule,
        ProjectsUiModule
      ],
      declarations: [HomeComponent],
      providers: [
        TranslateService,
        { provide: AngularFirestore, useValue: angularFirestoreStub }
      ]
    }).compileComponents();
    translate = TestBed.get(TranslateService);
    http = TestBed.get(HttpTestingController);
    angularFirestore = TestBed.get(AngularFirestore);
    projectsService = TestBed.get(ProjectsService);
    blogService = TestBed.get(BlogService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.projects$ = of([]);
    component.posts$ = of([]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
