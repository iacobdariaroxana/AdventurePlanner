import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TripViewModel } from '../../models/trip-view-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.scss'],
})
export class TripCardComponent {
  @Input() trip!: TripViewModel;
  @Output() tripDeleted = new EventEmitter<string>();

  constructor(private router: Router) {}

  navigateToTripDetails(): void {
    this.router.navigate(['home/trip/' + this.trip.id]);
  }

  deleteTrip(): void {
    if (confirm('Are you sure you want to delete this trip?')) {
      this.tripDeleted.emit(this.trip.id);
    }
  }
}
