import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondsInvoiceComponent } from './bonds-invoice.component';

describe('BondsInvoiceComponent', () => {
  let component: BondsInvoiceComponent;
  let fixture: ComponentFixture<BondsInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondsInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondsInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
