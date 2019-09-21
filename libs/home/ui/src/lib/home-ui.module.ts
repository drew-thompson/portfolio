import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonMaterialModule } from '@portfolio/common/material';
import { TopicComponent } from './topic/topic.component';

@NgModule({
  imports: [CommonModule, CommonMaterialModule, RouterModule],
  declarations: [TopicComponent],
  exports: [TopicComponent]
})
export class HomeUiModule {}
