import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelInvoiceBookingComponent } from './hotel-invoice-booking.component';

describe('HotelInvoiceBookingComponent', () => {
  let component: HotelInvoiceBookingComponent;
  let fixture: ComponentFixture<HotelInvoiceBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelInvoiceBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelInvoiceBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
