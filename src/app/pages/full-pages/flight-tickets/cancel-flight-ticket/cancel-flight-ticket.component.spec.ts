import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelFlightTicketComponent } from './cancel-flight-ticket.component';

describe('CancelFlightTicketComponent', () => {
  let component: CancelFlightTicketComponent;
  let fixture: ComponentFixture<CancelFlightTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelFlightTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelFlightTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
