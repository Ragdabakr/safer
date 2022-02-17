import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelVisaComponent } from './cancel-visa.component';

describe('CancelVisaComponent', () => {
  let component: CancelVisaComponent;
  let fixture: ComponentFixture<CancelVisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelVisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
