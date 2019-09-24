import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonMaterialModule } from '@portfolio/common/material';
import { ProjectMin } from '@portfolio/data/models';
import { mockTimestamp } from '@portfolio/testing/utils';
import { ProjectCardComponent } from './project-card.component';

describe('ProjectCardComponent', () => {
  let component: ProjectCardComponent;
  let fixture: ComponentFixture<ProjectCardComponent>;
  let validProject: ProjectMin;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonMaterialModule],
      declarations: [ProjectCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCardComponent);
    component = fixture.componentInstance;
    validProject = {
      title: 'Project X',
      description: 'X Project X',
      url: 'project-x',
      image: 'test',
      start: mockTimestamp
    };
    component.project = validProject;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
