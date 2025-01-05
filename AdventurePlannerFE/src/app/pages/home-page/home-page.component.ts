import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TripPopUpComponent } from './trip-pop-up/trip-pop-up.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  constructor(public dialog: MatDialog) {}
  openNewTripPopUp() {
    this.dialog.open(TripPopUpComponent);
  }
}
