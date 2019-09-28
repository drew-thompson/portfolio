import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimestampRangeComponent } from './timestamp-range.component';

describe('TimestampRangeComponent', () => {
  let component: TimestampRangeComponent;
  let fixture: ComponentFixture<TimestampRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimestampRangeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimestampRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
