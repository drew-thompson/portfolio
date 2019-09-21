import { async, TestBed } from '@angular/core/testing';
import { CommonMaterialModule } from '@portfolio/common/material';
import { HomeUiModule } from './home-ui.module';

describe('HomeUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HomeUiModule, CommonMaterialModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(HomeUiModule).toBeDefined();
  });
});
