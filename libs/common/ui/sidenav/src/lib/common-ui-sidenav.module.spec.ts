import { async, TestBed } from '@angular/core/testing';
import { CommonMaterialModule } from '@portfolio/common/material';
import { CommonUiSidenavModule } from './common-ui-sidenav.module';

describe('CommonUiSidenavModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonUiSidenavModule, CommonMaterialModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonUiSidenavModule).toBeDefined();
  });
});
