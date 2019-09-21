import { async, TestBed } from '@angular/core/testing';
import { HomeUiModule } from '@portfolio/home/ui';
import { SharedModule } from '@portfolio/shared';
import { HomeFeatureShellModule } from './home-feature-shell.module';

describe('HomeFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HomeFeatureShellModule, SharedModule, HomeUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(HomeFeatureShellModule).toBeDefined();
  });
});
