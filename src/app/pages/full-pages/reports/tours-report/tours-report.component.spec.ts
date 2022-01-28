import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursReportComponent } from './tours-report.component';

describe('ToursReportComponent', () => {
  let component: ToursReportComponent;
  let fixture: ComponentFixture<ToursReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToursReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToursReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
