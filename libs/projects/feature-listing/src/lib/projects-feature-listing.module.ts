import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ListingComponent
      }
    ])
  ],
  declarations: [ListingComponent]
})
export class ProjectsFeatureListingModule {}
