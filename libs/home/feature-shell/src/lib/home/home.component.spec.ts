import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterTestingModule } from '@angular/router/testing';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService
} from '@ngx-translate/core';
import { HttpLoaderFactory } from '@portfolio/core/config';
import { HomeUiModule } from '@portfolio/home/ui';
import { ProjectsService } from '@portfolio/projects/data-access';
import { SharedModule } from '@portfolio/shared';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let translate: TranslateService;
  let fixture: ComponentFixture<HomeComponent>;
  let http: HttpTestingController;
  let projectsService: ProjectsService;

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
        HomeUiModule
      ],
      declarations: [HomeComponent],
      providers: [TranslateService]
    }).compileComponents();
    translate = TestBed.get(TranslateService);
    http = TestBed.get(HttpTestingController);
    projectsService = TestBed.get(ProjectsService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.projects$ = projectsService.getProjects();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
