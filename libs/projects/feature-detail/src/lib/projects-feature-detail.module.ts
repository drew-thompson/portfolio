import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectResolver } from '@portfolio/projects/utils';
import { SharedUiModule } from '@portfolio/shared/ui';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedUiModule,

    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: DetailComponent,
        resolve: { project: ProjectResolver }
      }
    ])
  ],
  declarations: [DetailComponent]
})
export class ProjectsFeatureDetailModule {}
