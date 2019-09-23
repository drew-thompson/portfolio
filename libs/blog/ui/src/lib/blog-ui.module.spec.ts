import { async, TestBed } from '@angular/core/testing';
import { BlogUiModule } from './blog-ui.module';

describe('BlogUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BlogUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BlogUiModule).toBeDefined();
  });
});
