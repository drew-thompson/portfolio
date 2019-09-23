import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonMaterialModule } from '@portfolio/common/material';
import { PostCardComponent } from './post-card/post-card.component';

@NgModule({
  imports: [CommonModule, CommonMaterialModule],
  declarations: [PostCardComponent],
  exports: [PostCardComponent]
})
export class BlogUiModule {}
