import { async, TestBed } from '@angular/core/testing';
import { ProjectsFeatureDetailModule } from './projects-feature-detail.module';

describe('ProjectsFeatureDetailModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ProjectsFeatureDetailModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ProjectsFeatureDetailModule).toBeDefined();
  });
});
