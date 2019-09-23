import { async, TestBed } from '@angular/core/testing';
import { BlogDataAccessModule } from './blog-data-access.module';

describe('BlogDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BlogDataAccessModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BlogDataAccessModule).toBeDefined();
  });
});
