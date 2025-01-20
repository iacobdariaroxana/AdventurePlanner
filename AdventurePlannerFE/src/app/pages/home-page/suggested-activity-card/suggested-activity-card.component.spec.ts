import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedActivityCardComponent } from './suggested-activity-card.component';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { ActivityCommonCardContentComponent } from '../activity-common-card-content/activity-common-card-content.component';
import { MatIconModule } from '@angular/material/icon';
import { PriceLevel } from '../../models/enums/price-level';
import { SuggestedActivityViewModel } from '../../models/suggested-activity-view-model';
import { TripInterval } from '../../models/trip-interval';
import { MatProgressBarModule } from '@angular/material/progress-bar';

describe('SuggestedActivityCardComponent', () => {
  let component: SuggestedActivityCardComponent;
  let fixture: ComponentFixture<SuggestedActivityCardComponent>;

  const mockSuggestedActivityViewModel: SuggestedActivityViewModel = {
    id: '1',
    name: 'Sample Activity',
    location: 'Sample Location',
    date: new Date('2025-01-01'),
    tripId: 'trip-123',
    rating: 4.5,
    ratingCounts: 100,
    websiteUri: 'https://example.com',
    goodForChildren: true,
    priceLevel: PriceLevel.PRICE_LEVEL_EXPENSIVE,
    reviews: [
      { rating: '5', text: 'Excellent!', publishTimeAgo: '2 hours ago' },
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SuggestedActivityCardComponent,
        ActivityCommonCardContentComponent,
      ],
      imports: [
        MatDialogModule,
        MatCardModule,
        MatIconModule,
        MatProgressBarModule,
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: { close: jasmine.createSpy('close') },
        },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SuggestedActivityCardComponent);
    component = fixture.componentInstance;
    component.activity = mockSuggestedActivityViewModel;
    component.tripInterval = mockTripInterval;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
