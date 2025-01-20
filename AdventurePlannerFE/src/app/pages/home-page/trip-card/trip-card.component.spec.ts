import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripCardComponent } from './trip-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TripViewModel } from '../../models/trip-view-model';

describe('TripCardComponent', () => {
  let component: TripCardComponent;
  let fixture: ComponentFixture<TripCardComponent>;

  const mockTrip: TripViewModel = {
    id: '1',
    name: 'Sample Trip',
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-01-10'),
    numberOfPersons: 5,
    estimatedBudget: 1000,
    updateBasedOnDto: () => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TripCardComponent],
      imports: [MatCardModule, MatIconModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TripCardComponent);
    component = fixture.componentInstance;
    component.trip = mockTrip;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
