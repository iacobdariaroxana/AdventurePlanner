import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TripViewModel } from '../../models/trip-view-model';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TripService } from 'src/app/services/trip/trip.service';
import { TripDto } from 'src/app/dtos/trip-dto';

@Component({
  selector: 'app-trip-pop-up',
  templateUrl: './trip-pop-up.component.html',
  styleUrls: ['./trip-pop-up.component.scss'],
})
export class TripPopUpComponent {
  newTripForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    numberOfPersons: new FormControl(0, [Validators.min(0)]),
    estimatedBudget: new FormControl(0, [Validators.min(0)]),
  });
  tripDto = new TripDto();

  constructor(
    public dialogRef: MatDialogRef<TripPopUpComponent>,
    private tripService: TripService
  ) {}

  onSubmit() {
    if (this.newTripForm.valid) {
      const trip = this.newTripForm.value as unknown as TripViewModel;
      this.tripDto.updateBasedOnModel(trip);
      this.tripService.insertTrip(this.tripDto).subscribe({
        next: (value) => {
          console.log('Trip saved successfully:', value);
          this.dialogRef.close();
        },
        error: (err) => console.error(err),
      });
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
