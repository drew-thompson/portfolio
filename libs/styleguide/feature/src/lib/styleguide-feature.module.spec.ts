import { async, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonMaterialModule } from '@portfolio/common/material';
import { StyleguideFeatureModule } from './styleguide-feature.module';

describe('StyleguideFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StyleguideFeatureModule,
        RouterTestingModule,
        FlexLayoutModule,
        CommonMaterialModule
      ]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StyleguideFeatureModule).toBeDefined();
  });
});
