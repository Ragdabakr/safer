import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingHotelsComponent } from './booking-hotels.component';

describe('BookingHotelsComponent', () => {
  let component: BookingHotelsComponent;
  let fixture: ComponentFixture<BookingHotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingHotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
