import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Route, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BlogUiModule } from '@portfolio/blog/ui';
import { HomeUiModule } from '@portfolio/home/ui';
import { ProjectsUiModule } from '@portfolio/projects/ui';
import { SharedModule } from '@portfolio/shared';
import { SharedUiModule } from '@portfolio/shared/ui';
import { HomeComponent } from './home/home.component';

export const homeFeatureShellRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    TranslateModule,
    HomeUiModule,
    ProjectsUiModule,
    BlogUiModule,
    SharedUiModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeFeatureShellModule {}
