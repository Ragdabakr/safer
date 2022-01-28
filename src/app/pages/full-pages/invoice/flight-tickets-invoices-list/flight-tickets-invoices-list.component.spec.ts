import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightTicketsInvoicesListComponent } from './flight-tickets-invoices-list.component';

describe('FlightTicketsInvoicesListComponent', () => {
  let component: FlightTicketsInvoicesListComponent;
  let fixture: ComponentFixture<FlightTicketsInvoicesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightTicketsInvoicesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightTicketsInvoicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
