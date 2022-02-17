import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaInvoiceComponent } from './visa-invoice.component';

describe('VisaInvoiceComponent', () => {
  let component: VisaInvoiceComponent;
  let fixture: ComponentFixture<VisaInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
