import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripService } from 'src/app/services/trip/trip.service';
import { TripViewModel } from '../../models/trip-view-model';
import { GoogleApiService } from 'src/app/services/google-api/google-api.service';
import { DetailedTripViewModel } from '../../models/detailed-trip-view-model';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss'],
})
export class TripDetailsComponent {
  detailedTrip: DetailedTripViewModel | undefined;

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
          console.log(value);
          this.detailedTrip = value;
        },
        error: (err) => {
          console.log(err);
        },
      });
    });

    // this._googleApiService.getActivities(      {
    //   textQuery: 'museums in France',
    //   priceLevels: ['PRICE_LEVEL_VERY_EXPENSIVE'],
    // }).subscribe({
    //   next: (result) => {
    //     console.log(result)
    //   },
    //   error: (err) => console.log(err)
    // })
  }
}
