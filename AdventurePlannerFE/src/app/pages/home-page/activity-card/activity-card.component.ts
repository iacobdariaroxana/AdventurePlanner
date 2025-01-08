import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivityViewModel } from '../../models/activity-view-model';
import { PriceLevel } from '../../models/enums/price-level';
import { MatDialog } from '@angular/material/dialog';
import { AddToTripPopUpComponent } from '../add-to-trip-pop-up/add-to-trip-pop-up.component';
import { TripInterval } from '../../models/trip-interval';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.scss'],
})
export class ActivityCardComponent {
  @Input() activity!: ActivityViewModel;
  @Input() tripInterval!: TripInterval;
  @Output() onActivityChanged = new EventEmitter<any>();
  @Output() onActivityDeleted = new EventEmitter<string>();

  constructor(public dialog: MatDialog) {}

  editActivity() {
    const dialogRef = this.dialog.open(AddToTripPopUpComponent, {
      data: { activity: this.activity, tripInterval: this.tripInterval },
    });

    dialogRef.afterClosed().subscribe((result) => {
      // this.onActivityAdded.emit(result);
    });
  }

  deleteActivity(): void {
    if (confirm('Are you sure you want to delete this activity?')) {
      this.onActivityDeleted.emit(this.activity.id);
    }
  }
}
