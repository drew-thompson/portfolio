import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonMaterialModule } from '@portfolio/common/material';
import { CarouselComponent } from './carousel/carousel.component';
import { LoaderComponent } from './loader/loader.component';
import { TimestampRangeComponent } from './timestamp-range/timestamp-range.component';
import { TimestampComponent } from './timestamp/timestamp.component';

@NgModule({
  imports: [CommonModule, TranslateModule, CommonMaterialModule],
  declarations: [CarouselComponent, LoaderComponent, TimestampRangeComponent, TimestampComponent],
  exports: [CarouselComponent, LoaderComponent, TimestampRangeComponent, TimestampComponent]
})
export class SharedUiModule {}
