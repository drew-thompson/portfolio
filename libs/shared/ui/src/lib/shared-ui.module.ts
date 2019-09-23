import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonMaterialModule } from '@portfolio/common/material';
import { CarouselComponent } from './carousel/carousel.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [CommonModule, CommonMaterialModule],
  declarations: [CarouselComponent, LoaderComponent],
  exports: [CarouselComponent, LoaderComponent]
})
export class SharedUiModule {}
