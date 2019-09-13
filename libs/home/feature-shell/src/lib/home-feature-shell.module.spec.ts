import { async, TestBed } from '@angular/core/testing';
import { HomeFeatureShellModule } from './home-feature-shell.module';

describe('HomeFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HomeFeatureShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(HomeFeatureShellModule).toBeDefined();
  });
});
