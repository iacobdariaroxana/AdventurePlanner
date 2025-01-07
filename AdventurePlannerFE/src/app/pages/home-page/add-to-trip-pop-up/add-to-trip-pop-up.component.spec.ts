import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToTripPopUpComponent } from './add-to-trip-pop-up.component';

describe('AddToTripPopUpComponent', () => {
  let component: AddToTripPopUpComponent;
  let fixture: ComponentFixture<AddToTripPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToTripPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToTripPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
