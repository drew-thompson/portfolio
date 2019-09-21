import { ScrollingModule } from '@angular/cdk/scrolling';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {
  AngularFireFunctionsModule,
  FUNCTIONS_ORIGIN
} from '@angular/fire/functions';
import { AngularFirePerformanceModule } from '@angular/fire/performance';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService
} from '@ngx-translate/core';
import { CommonDirectivesModule } from '@portfolio/common/directives';
import { CommonMaterialModule } from '@portfolio/common/material';
import { CommonUiHeaderModule } from '@portfolio/common/ui/header';
import { CommonUiSidenavModule } from '@portfolio/common/ui/sidenav';
import { ENVIRONMENT, HttpLoaderFactory } from '@portfolio/core/config';
import { HomeFeatureShellModule } from '@portfolio/home/feature-shell';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeFeatureShellModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireFunctionsModule,
    AngularFirePerformanceModule,
    FlexLayoutModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    CommonMaterialModule,
    CommonUiHeaderModule,
    CommonUiSidenavModule,
    CommonDirectivesModule,
    ScrollingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: ENVIRONMENT, useValue: environment },
    { provide: FUNCTIONS_ORIGIN, useValue: environment.apiOrigin }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
