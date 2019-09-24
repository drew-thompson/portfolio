import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonMaterialModule } from '@portfolio/common/material';
import { ProjectCardComponent } from './project-card/project-card.component';

@NgModule({
  imports: [CommonModule, CommonMaterialModule, TranslateModule],
  declarations: [ProjectCardComponent],
  exports: [ProjectCardComponent]
})
export class ProjectsUiModule {}
