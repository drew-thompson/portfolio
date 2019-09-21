import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonMaterialModule } from '@portfolio/common/material';
import { HomeUiModule } from './home-ui.module';

describe('HomeUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HomeUiModule, CommonMaterialModule, RouterTestingModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(HomeUiModule).toBeDefined();
  });
});
