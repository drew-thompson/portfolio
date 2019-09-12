import { APP_BASE_HREF } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {
  AngularFireFunctionsModule,
  FUNCTIONS_ORIGIN
} from '@angular/fire/functions';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CommonDirectivesModule } from '@portfolio/common/directives';
import { ENVIRONMENT, HttpLoaderFactory } from '@portfolio/core/config';
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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireFunctionsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    CommonDirectivesModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: ENVIRONMENT, useValue: environment },
    { provide: FUNCTIONS_ORIGIN, useValue: environment.apiOrigin }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
