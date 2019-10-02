import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ProjectsUiModule } from '@portfolio/projects/ui';
import { ListingComponent } from './listing/listing.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ProjectsUiModule,

    RouterModule.forChild([
      {
        path: '',
        component: ListingComponent,
        children: [
          {
            path: ':id',
            loadChildren: () => import('@portfolio/projects/feature-detail').then(m => m.ProjectsFeatureDetailModule)
          }
        ]
      }
    ])
  ],
  declarations: [ListingComponent]
})
export class ProjectsFeatureListingModule {}
