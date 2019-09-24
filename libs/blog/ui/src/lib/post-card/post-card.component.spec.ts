import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonMaterialModule } from '@portfolio/common/material';
import { Post } from '@portfolio/data/models';
import { mockTimestamp } from '@portfolio/testing/utils';
import { PostCardComponent } from './post-card.component';

describe('PostCardComponent', () => {
  let component: PostCardComponent;
  let fixture: ComponentFixture<PostCardComponent>;
  let validPost: Post;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonMaterialModule],
      declarations: [PostCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardComponent);
    component = fixture.componentInstance;
    validPost = {
      title: 'Good Article',
      description: 'Read it please.',
      createdAt: mockTimestamp,
      url: 'good-article',
      image: ''
    };
    component.post = validPost;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
