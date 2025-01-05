import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TripPopUpComponent } from './trip-pop-up/trip-pop-up.component';
import { TripService } from 'src/app/services/trip/trip.service';
import { TripViewModel } from '../models/trip-view-model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  trips: TripViewModel[] = [];
  constructor(public dialog: MatDialog, private _tripService: TripService) {}

  ngOnInit(): void {
    this.updateTrips();
  }

  updateTrips() {
    this._tripService.getTrips().subscribe({
      next: (trips) => {
        this.trips = trips;
        console.log(trips);
      },
      error: (err) => console.log(err),
    });
  }

  openNewTripPopUp() {
    const dialogRef = this.dialog.open(TripPopUpComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.updateTrips();
    });
  }
}
