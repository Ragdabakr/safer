import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelHotelComponent } from './cancel-hotel.component';

describe('CancelHotelComponent', () => {
  let component: CancelHotelComponent;
  let fixture: ComponentFixture<CancelHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
