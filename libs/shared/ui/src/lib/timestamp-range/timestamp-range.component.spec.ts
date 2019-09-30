import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { Timestamp } from '@portfolio/data/models';
import { mockTimestamp } from '@portfolio/testing/utils';
import { TimestampComponent } from '../timestamp/timestamp.component';
import { TimestampRangeComponent } from './timestamp-range.component';

describe('TimestampRangeComponent', () => {
  let component: TimestampRangeComponent;
  let fixture: ComponentFixture<TimestampRangeComponent>;
  let start: Timestamp;
  let end: Timestamp;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule],
      declarations: [TimestampRangeComponent, TimestampComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimestampRangeComponent);
    component = fixture.componentInstance;
    start = mockTimestamp;
    end = mockTimestamp;
    component.start = start;
    component.end = end;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
