import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CommonUiHeaderModule } from '@portfolio/common/ui/header';
import { HomeComponent } from './home/home.component';

export const homeFeatureShellRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule, CommonUiHeaderModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeFeatureShellModule {}
