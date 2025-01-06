import { Component, Input } from '@angular/core';
import { ActivityViewModel } from '../../models/activity-view-model';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.scss']
})
export class ActivityCardComponent {
  @Input() activity!: ActivityViewModel;
}
