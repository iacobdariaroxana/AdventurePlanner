import { Component, Input } from '@angular/core';
import { TripViewModel } from '../../models/trip-view-model';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.scss'],
})
export class TripCardComponent {
  @Input() trip!: TripViewModel;
}
