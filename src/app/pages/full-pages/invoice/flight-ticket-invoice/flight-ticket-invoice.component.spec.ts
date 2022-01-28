import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightTicketInvoiceComponent } from './flight-ticket-invoice.component';

describe('FlightTicketInvoiceComponent', () => {
  let component: FlightTicketInvoiceComponent;
  let fixture: ComponentFixture<FlightTicketInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightTicketInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightTicketInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
