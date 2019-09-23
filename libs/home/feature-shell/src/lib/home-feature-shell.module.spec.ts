import { async, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { HomeUiModule } from '@portfolio/home/ui';
import { ProjectsUiModule } from '@portfolio/projects/ui';
import { SharedModule } from '@portfolio/shared';
import { HomeFeatureShellModule } from './home-feature-shell.module';

describe('HomeFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HomeFeatureShellModule,
        SharedModule,
        TranslateModule,
        HomeUiModule,
        ProjectsUiModule
      ]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(HomeFeatureShellModule).toBeDefined();
  });
});
