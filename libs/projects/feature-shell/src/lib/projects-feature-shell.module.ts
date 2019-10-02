import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => import('@portfolio/projects/feature-listing').then(m => m.ProjectsFeatureListingModule)
      }
    ])
  ]
})
export class ProjectsFeatureShellModule {}
