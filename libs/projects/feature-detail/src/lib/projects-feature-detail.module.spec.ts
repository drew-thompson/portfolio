import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonMaterialModule } from '@portfolio/common/material';
import { SharedUiModule } from '@portfolio/shared/ui';
import { ProjectsFeatureDetailModule } from './projects-feature-detail.module';

describe('ProjectsFeatureDetailModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ProjectsFeatureDetailModule, CommonMaterialModule, RouterTestingModule, SharedUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ProjectsFeatureDetailModule).toBeDefined();
  });
});
