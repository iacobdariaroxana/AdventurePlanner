import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityCardComponent } from './activity-card.component';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { ActivityCommonCardContentComponent } from '../activity-common-card-content/activity-common-card-content.component';
import { MatIconModule } from '@angular/material/icon';
import { PriceLevel } from '../../models/enums/price-level';
import { ActivityViewModel } from '../../models/activity-view-model';
import { MatProgressBarModule } from '@angular/material/progress-bar';

describe('ActivityCardComponent', () => {
  let component: ActivityCardComponent;
  let fixture: ComponentFixture<ActivityCardComponent>;

  const mockActivityViewModel: ActivityViewModel = {
    id: '1', // Mock ID value
    name: 'Sample Activity',
    location: 'Sample Location',
    date: new Date('2025-01-01'),
    tripId: 'trip-123',
    rating: 4.5,
    ratingCounts: 100,
    websiteUri: 'https://example.com',
    goodForChildren: true,
    priceLevel: PriceLevel.PRICE_LEVEL_EXPENSIVE,
    updateBasedOnDto: () => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActivityCardComponent, ActivityCommonCardContentComponent],
      imports: [
        MatDialogModule,
        MatCardModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatProgressBarModule
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: { close: jasmine.createSpy('close') },
        },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ActivityCardComponent);
    component = fixture.componentInstance;
    component.activity = mockActivityViewModel;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
