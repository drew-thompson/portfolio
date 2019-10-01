import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonMaterialModule } from '@portfolio/common/material';
import { ProjectResolver } from '@portfolio/projects/utils';
import { SharedUiModule } from '@portfolio/shared/ui';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    CommonMaterialModule,
    SharedUiModule,
    TranslateModule.forChild(),

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
