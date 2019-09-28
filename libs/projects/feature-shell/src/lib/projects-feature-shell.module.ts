import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('@portfolio/projects/feature-listing').then(m => m.ProjectsFeatureListingModule)
      },
      {
        path: ':id',
        loadChildren: () => import('@portfolio/projects/feature-detail').then(m => m.ProjectsFeatureDetailModule)
      }
    ])
  ]
})
export class ProjectsFeatureShellModule {}
