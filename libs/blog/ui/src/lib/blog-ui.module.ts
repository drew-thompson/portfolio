import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonMaterialModule } from '@portfolio/common/material';
import { PostCardComponent } from './post-card/post-card.component';

@NgModule({
  imports: [CommonModule, RouterModule, CommonMaterialModule],
  declarations: [PostCardComponent],
  exports: [PostCardComponent]
})
export class BlogUiModule {}
