import { async, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { CommonMaterialModule } from '@portfolio/common/material';
import { CarouselComponent } from './carousel/carousel.component';
import { LoaderComponent } from './loader/loader.component';
import { SharedUiModule } from './shared-ui.module';
import { TimestampRangeComponent } from './timestamp-range/timestamp-range.component';
import { TimestampComponent } from './timestamp/timestamp.component';

describe('SharedUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule, CommonMaterialModule],
      declarations: [CarouselComponent, LoaderComponent, TimestampRangeComponent, TimestampComponent]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiModule).toBeDefined();
  });
});
