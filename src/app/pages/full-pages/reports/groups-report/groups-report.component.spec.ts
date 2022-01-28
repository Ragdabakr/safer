import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsReportComponent } from './groups-report.component';

describe('GroupsReportComponent', () => {
  let component: GroupsReportComponent;
  let fixture: ComponentFixture<GroupsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
