import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonMaterialModule } from '@portfolio/common/material';
import { ProjectCardComponent } from './project-card/project-card.component';

@NgModule({
  imports: [CommonModule, RouterModule, TranslateModule, CommonMaterialModule],
  declarations: [ProjectCardComponent],
  exports: [ProjectCardComponent]
})
export class ProjectsUiModule {}
