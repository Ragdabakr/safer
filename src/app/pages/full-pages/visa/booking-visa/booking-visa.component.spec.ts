import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingVisaComponent } from './booking-visa.component';

describe('BookingVisaComponent', () => {
  let component: BookingVisaComponent;
  let fixture: ComponentFixture<BookingVisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingVisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
