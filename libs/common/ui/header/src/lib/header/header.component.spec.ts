import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonMaterialModule } from '@portfolio/common/material';
import { SidenavService } from '@portfolio/common/services';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let sidenavService: SidenavService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FlexLayoutModule, CommonMaterialModule],
      declarations: [HeaderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    sidenavService = TestBed.get(SidenavService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
