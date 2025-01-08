import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PriceLevel } from '../../models/enums/price-level';
import { SuggestedActivityViewModel } from '../../models/suggested-activity-view-model';
import { MatDialog } from '@angular/material/dialog';
import { SuggestedActivityDetailedComponent } from '../suggested-activity-detailed/suggested-activity-detailed.component';
import { TripInterval } from '../../models/trip-interval';
import { AddToTripPopUpComponent } from '../add-to-trip-pop-up/add-to-trip-pop-up.component';

@Component({
  selector: 'app-suggested-activity-card',
  templateUrl: './suggested-activity-card.component.html',
  styleUrls: ['./suggested-activity-card.component.scss'],
})
export class SuggestedActivityCardComponent {
  @Input() activity!: SuggestedActivityViewModel;
  @Input() tripInterval!: TripInterval;
  @Output() onActivityAdded = new EventEmitter<any>();

  constructor(public dialog: MatDialog) {}

  openDetailedCard() {
    this.dialog.open(SuggestedActivityDetailedComponent, {
      data: this.activity,
    });
  }

  openAddToTripPopUp() {
    const dialogRef = this.dialog.open(AddToTripPopUpComponent, {
      data: { activity: this.activity, tripInterval: this.tripInterval },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.onActivityAdded.emit(result);
    });
  }
}
