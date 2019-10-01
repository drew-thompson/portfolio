import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonMaterialModule } from '@portfolio/common/material';
import { CarouselComponent } from './carousel/carousel.component';
import { LoaderComponent } from './loader/loader.component';
import { TimestampRangeComponent } from './timestamp-range/timestamp-range.component';
import { TimestampComponent } from './timestamp/timestamp.component';
import { TocComponent } from './toc/toc.component';

@NgModule({
  imports: [CommonModule, TranslateModule, CommonMaterialModule, RouterModule],
  declarations: [CarouselComponent, LoaderComponent, TimestampRangeComponent, TimestampComponent, TocComponent],
  exports: [CarouselComponent, LoaderComponent, TimestampRangeComponent, TimestampComponent, TocComponent]
})
export class SharedUiModule {}
