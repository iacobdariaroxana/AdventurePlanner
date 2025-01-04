import { Component, OnInit } from '@angular/core';
import { TripService } from './services/trip/trip.service';
import { TripDto } from './dtos/trip-dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'AdventurePlannerFE';

  constructor(private tripService: TripService) {}

  ngOnInit(): void {
    // this.tripService.deleteTrip('d7bb2374-6e4a-4750-ba8f-cceba8cc8fbe').subscribe((result) => {
    //   console.log(result);
    // })
    // let trip = new TripDto();
    // trip.name = 'paris';
    // trip.startDate = '2025-01-04';
    // trip.endDate = '2025-01-04';
    // this.tripService.insertTrip(trip).subscribe({
    //   next: (value) => console.log(value),
    //   error: (err) => console.error(err),
    // });
  }
}
