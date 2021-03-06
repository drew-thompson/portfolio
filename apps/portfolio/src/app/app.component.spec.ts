import { APP_BASE_HREF } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFirePerformanceModule } from '@angular/fire/performance';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule, SwUpdate } from '@angular/service-worker';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService
} from '@ngx-translate/core';
import { CommonDirectivesModule } from '@portfolio/common/directives';
import { CommonMaterialModule } from '@portfolio/common/material';
import { CommonUiFooterModule } from '@portfolio/common/ui/footer';
import { CommonUiHeaderModule } from '@portfolio/common/ui/header';
import { CommonUiSidenavModule } from '@portfolio/common/ui/sidenav';
import { ENVIRONMENT, HttpLoaderFactory } from '@portfolio/core/config';
import { HomeFeatureShellModule } from '@portfolio/home/feature-shell';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HomeFeatureShellModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireFunctionsModule,
        AngularFirePerformanceModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }),
        CommonMaterialModule,
        CommonUiFooterModule,
        CommonUiHeaderModule,
        CommonUiSidenavModule,
        CommonDirectivesModule,
        ServiceWorkerModule.register('ngsw-worker.js')
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: ENVIRONMENT, useValue: environment },
        TranslateService,
        SwUpdate
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
