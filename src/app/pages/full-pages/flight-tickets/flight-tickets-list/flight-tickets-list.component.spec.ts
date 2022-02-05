import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightTicketsListComponent } from './flight-tickets-list.component';

describe('FlightTicketsListComponent', () => {
  let component: FlightTicketsListComponent;
  let fixture: ComponentFixture<FlightTicketsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightTicketsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightTicketsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
