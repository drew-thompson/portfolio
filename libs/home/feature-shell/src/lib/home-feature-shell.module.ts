import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Route, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HomeUiModule } from '@portfolio/home/ui';
import { SharedModule } from '@portfolio/shared';
import { HomeComponent } from './home/home.component';

export const homeFeatureShellRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    TranslateModule,
    HomeUiModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeFeatureShellModule {}
