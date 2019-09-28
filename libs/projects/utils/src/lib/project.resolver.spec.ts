import { async, inject, TestBed } from '@angular/core/testing';

import { ProjectResolver } from './project.resolver';

describe('ProjectResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectResolver]
    });
  });

  it('should ...', inject([ProjectResolver], (resolver: ProjectResolver) => {
    expect(resolver).toBeTruthy();
  }));
});
