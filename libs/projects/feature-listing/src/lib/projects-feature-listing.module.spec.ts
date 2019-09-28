import { async, TestBed } from '@angular/core/testing';
import { ProjectsFeatureListingModule } from './projects-feature-listing.module';

describe('ProjectsFeatureListingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ProjectsFeatureListingModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ProjectsFeatureListingModule).toBeDefined();
  });
});
