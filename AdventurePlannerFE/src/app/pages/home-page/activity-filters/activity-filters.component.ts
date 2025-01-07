import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Filters } from './filters';

@Component({
  selector: 'app-activity-filters',
  templateUrl: './activity-filters.component.html',
  styleUrls: ['./activity-filters.component.scss'],
})
export class ActivityFiltersComponent implements OnInit {
  activityTypes: string[] = [
    'Museums',
    'Restaurants',
    'Parks',
    'Sports',
    'Sightseeing',
    'Health & Welness',
    'Cathedrals',
    'Clubs',
  ];

  filters: Filters = new Filters();

  @Output() filtersChanged = new EventEmitter<any>();

  ngOnInit(): void {
    // this.filtersChanged.emit(this.filters);
  }

  search() {
    this.filtersChanged.emit(this.filters);
  }
}
