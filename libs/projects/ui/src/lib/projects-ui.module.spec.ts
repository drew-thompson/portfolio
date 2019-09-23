import { async, TestBed } from '@angular/core/testing';
import { ProjectsUiModule } from './projects-ui.module';

describe('ProjectsUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ProjectsUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ProjectsUiModule).toBeDefined();
  });
});
