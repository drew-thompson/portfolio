import { async, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { CommonUiFooterModule } from './common-ui-footer.module';

describe('CommonUiFooterModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonUiFooterModule, FlexLayoutModule, TranslateModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonUiFooterModule).toBeDefined();
  });
});
