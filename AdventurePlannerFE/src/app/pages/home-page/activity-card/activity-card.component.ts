import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivityViewModel } from '../../models/activity-view-model';
import { PriceLevel } from '../../models/enums/price-level';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.scss'],
})
export class ActivityCardComponent {
  @Input() activity!: ActivityViewModel;
  @Output() activityDeleted = new EventEmitter<string>(); 


  deleteActivity(): void {
    if (confirm('Are you sure you want to delete this activity?')) {
      this.activityDeleted.emit(this.activity.id); 
    }
  }
}
