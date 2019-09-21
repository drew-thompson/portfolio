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
import { SharedModule } from '@portfolio/shared';
import { of } from 'rxjs';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let translate: TranslateService;
  let fixture: ComponentFixture<HomeComponent>;
  let http: HttpTestingController;

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
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.topics$ = of([
      {
        title: 'Projects',
        image:
          'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?cs=srgb&dl=blur-code-coding-270408.jpg&fm=jpg',
        subtitle:
          "All of the fun, challenging, and exciting projects I've been able to be a part of.",
        description:
          "It's always a pleasure to put my heart into a project and see how far I can go with it."
      },
      {
        title: 'Blog',
        image:
          'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        subtitle: 'What I have to say about the tech I use.',
        description: 'Test'
      }
    ]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
