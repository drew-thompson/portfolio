import { async, TestBed } from '@angular/core/testing';
import { CommonUiHeaderModule } from './common-ui-header.module';

describe('CommonUiHeaderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonUiHeaderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonUiHeaderModule).toBeDefined();
  });
});
