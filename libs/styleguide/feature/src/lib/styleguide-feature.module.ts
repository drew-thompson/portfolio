import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { CommonMaterialModule } from '@portfolio/common/material';
import { StyleguideComponent } from './styleguide/styleguide.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    CommonMaterialModule,

    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: StyleguideComponent
      }
    ])
  ],
  declarations: [StyleguideComponent]
})
export class StyleguideFeatureModule {}
