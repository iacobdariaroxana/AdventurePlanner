import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripService } from 'src/app/services/trip/trip.service';
import { GoogleApiService } from 'src/app/services/google-api/google-api.service';
import { DetailedTripViewModel } from '../../models/detailed-trip-view-model';
import { Filters } from '../activity-filters/filters';
import { SuggestedActivityViewModel } from '../../models/suggested-activity-view-model';
import { EMPTY_GUID } from 'src/app/constants';
import { TripInterval } from '../../models/trip-interval';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss'],
})
export class TripDetailsComponent {
  detailedTrip!: DetailedTripViewModel;
  tripInterval: TripInterval = new TripInterval();
  suggestedActivities: SuggestedActivityViewModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private _tripService: TripService,
    private _googleApiService: GoogleApiService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let tripId = params['id'];
      this._tripService.getById(tripId).subscribe({
        next: (value) => {
          this.detailedTrip = value;
          this.tripInterval.startDate = value.startDate;
          this.tripInterval.endDate = value.endDate;
        },
        error: (err) => {
          console.log(err);
        },
      });
    });
  }

  onFiltersChanged(filters: Filters) {
    let query = `${filters.activityType} in ${this.detailedTrip?.name}`;
    this._googleApiService
      .getActivities({
        textQuery: query,
        minRating: filters.rating,
      })
      .subscribe({
        next: (result) => {
          this.suggestedActivities = result.sort((a, b) => b.rating - a.rating);
          this.suggestedActivities.forEach(
            (activity) =>
              (activity.tripId = this.detailedTrip
                ? this.detailedTrip.id
                : EMPTY_GUID)
          );
        },
        error: (err) => console.log(err),
      });
  }

  refreshPlannedActivities(shouldRefresh: boolean) {
    console.log(shouldRefresh);
    if (shouldRefresh) {
      this._tripService.getTripActivities(this.detailedTrip.id).subscribe({
        next: (activities) => {
          this.detailedTrip.activities = activities;
        },
        error: (err) => console.log(err),
      });
    }
  }
}
