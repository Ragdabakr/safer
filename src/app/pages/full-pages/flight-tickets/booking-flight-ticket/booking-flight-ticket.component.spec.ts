import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFlightTicketComponent } from './booking-flight-ticket.component';

describe('BookingFlightTicketComponent', () => {
  let component: BookingFlightTicketComponent;
  let fixture: ComponentFixture<BookingFlightTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingFlightTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingFlightTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
