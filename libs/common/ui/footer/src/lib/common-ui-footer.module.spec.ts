import { async, TestBed } from '@angular/core/testing';
import { CommonUiFooterModule } from './common-ui-footer.module';

describe('CommonUiFooterModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonUiFooterModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonUiFooterModule).toBeDefined();
  });
});
