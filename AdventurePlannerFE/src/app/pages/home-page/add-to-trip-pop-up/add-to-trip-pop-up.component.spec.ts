import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToTripPopUpComponent } from './add-to-trip-pop-up.component';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SuggestedActivityViewModel } from '../../models/suggested-activity-view-model';
import { PriceLevel } from '../../models/enums/price-level';
import { TripInterval } from '../../models/trip-interval';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddToTripPopUpComponent', () => {
  let component: AddToTripPopUpComponent;
  let fixture: ComponentFixture<AddToTripPopUpComponent>;

  const mockSuggestedActivityViewModel: SuggestedActivityViewModel = {
    id: '1',
    name: 'Sample Activity',
    location: 'Sample Location',
    date: new Date('2025-01-02'),
    tripId: 'trip-123',
    rating: 4.5,
    ratingCounts: 100,
    websiteUri: 'https://example.com',
    goodForChildren: true,
    priceLevel: PriceLevel.PRICE_LEVEL_EXPENSIVE,
    reviews: [
      { rating: '5', text: 'Excellent!', publishTimeAgo: '2 hours ago' },
      { rating: '4', text: 'Good activity.', publishTimeAgo: '1 day ago' },
    ],
    photosReferences: ['photo1.jpg', 'photo2.jpg'],
    openingHours: ['9:00 AM - 5:00 PM', 'Closed on Sundays'],

    get isNew(): boolean {
      return this.id == '' || this.id == 'EMPTY_GUID';
    },
    updateBasedOnDto: () => {},
  };

  const mockTripInterval: TripInterval = {
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-01-10'),
  };

  const mockActivityDate: Date = new Date('2025-01-05');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddToTripPopUpComponent],
      imports: [
        MatDialogModule,
        HttpClientTestingModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: { close: jasmine.createSpy('close') },
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            activity: mockSuggestedActivityViewModel,
            tripInterval: mockTripInterval,
            activityDate: mockActivityDate,
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddToTripPopUpComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
