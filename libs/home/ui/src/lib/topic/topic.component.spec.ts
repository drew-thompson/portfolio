import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonMaterialModule } from '@portfolio/common/material';
import { Topic } from '@portfolio/data/models';
import { TopicComponent } from './topic.component';

describe('TopicComponent', () => {
  let component: TopicComponent;
  let fixture: ComponentFixture<TopicComponent>;
  let validTopic: Topic;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonMaterialModule],
      declarations: [TopicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicComponent);
    validTopic = {
      title: 'Hello!',
      subtitle: 'A greeting',
      description: 'This is one'
    };
    component = fixture.componentInstance;
    component.topic = validTopic;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
