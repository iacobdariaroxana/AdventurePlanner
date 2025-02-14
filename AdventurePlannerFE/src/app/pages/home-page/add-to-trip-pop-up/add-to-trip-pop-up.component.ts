import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SuggestedActivityViewModel } from '../../models/suggested-activity-view-model';
import { TripInterval } from '../../models/trip-interval';
import { ActivityService } from 'src/app/services/activity/activity.service';
import { ActivityDto } from 'src/app/dtos/activity-dto';
import { SuggestedActivityDetailedComponent } from '../suggested-activity-detailed/suggested-activity-detailed.component';

@Component({
  selector: 'app-add-to-trip-pop-up',
  templateUrl: './add-to-trip-pop-up.component.html',
  styleUrls: ['./add-to-trip-pop-up.component.scss'],
})
export class AddToTripPopUpComponent {
  activity!: SuggestedActivityViewModel;
  tripInterval!: TripInterval;
  activityDate: Date | null | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<SuggestedActivityDetailedComponent>,
    private activityService: ActivityService
  ) {
    if (data) {
      this.activity = data.activity;
      if (data.activity.date) {
        this.activityDate = data.activity.date;
      }
      this.tripInterval = data.tripInterval;
    }
  }

  closeDialog() {
    this.dialogRef.close(false);
  }

  saveActivity() {
    this.activity.date = this.activityDate;

    let activityDto = new ActivityDto();
    activityDto.updateBasedOnModel(this.activity);

    this.activityService.insertActivity(activityDto).subscribe({
      next: (value) => {
        console.log('Activity saved successfully:', value);
        this.dialogRef.close(true);
      },
      error: (err) => console.error(err),
    });
  }

  updateActivity() {
    this.activity.date = this.activityDate;

    let activityDto = new ActivityDto();
    activityDto.updateBasedOnModel(this.activity);

    this.activityService
      .updateActivity(this.activity.id, activityDto)
      .subscribe({
        next: (value) => {
          console.log('Activity updated successfully:', value);
          this.dialogRef.close(true);
        },
        error: (err) => console.error(err),
      });
  }
}
