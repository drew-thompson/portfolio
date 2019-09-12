import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService
} from '@ngx-translate/core';
import { HttpLoaderFactory } from '@portfolio/core/config';
import { TimeFromNowDirective } from './time-from-now.directive';

describe('TimeFromNowDirective', () => {
  let translate: TranslateService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ],
      providers: [TranslateService]
    });
    translate = TestBed.get(TranslateService);
    http = TestBed.get(HttpTestingController);
  });

  it('should create an instance', () => {
    const directive = new TimeFromNowDirective(translate);
    expect(directive).toBeTruthy();
  });
});
