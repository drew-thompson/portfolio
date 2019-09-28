import { async, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { CommonMaterialModule } from '@portfolio/common/material';
import { SharedUiModule } from './shared-ui.module';

describe('SharedUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiModule, TranslateModule, CommonMaterialModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiModule).toBeDefined();
  });
});
