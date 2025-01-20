import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityCommonCardContentComponent } from './activity-common-card-content.component';
import { MatIconModule } from '@angular/material/icon';
import { ActivityViewModel } from '../../models/activity-view-model';
import { PriceLevel } from '../../models/enums/price-level';
import { MatProgressBarModule } from '@angular/material/progress-bar';

describe('ActivityCommonCardContentComponent', () => {
  let component: ActivityCommonCardContentComponent;
  let fixture: ComponentFixture<ActivityCommonCardContentComponent>;

  const mockActivityViewModel: ActivityViewModel = {
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
    updateBasedOnDto: () => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActivityCommonCardContentComponent],
      imports: [MatIconModule, MatProgressBarModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ActivityCommonCardContentComponent);
    component = fixture.componentInstance;
    component.activity = mockActivityViewModel;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
