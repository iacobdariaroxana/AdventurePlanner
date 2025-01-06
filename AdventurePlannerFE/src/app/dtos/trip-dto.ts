import { EMPTY_GUID } from '../constants';
import { TripViewModel } from '../pages/models/trip-view-model';

export class TripDto {
  id = '';
  name = '';
  startDate = '';
  endDate = '';
  numberOfPersons = 0;
  estimatedBudget = 0;

  updateBasedOnModel(trip: TripViewModel) {
    if (this.id == '') {
      this.id = EMPTY_GUID;
    }
    
    this.name = trip.name;
    this.startDate = trip.startDate.toISOString().split('T')[0];
    this.endDate = trip.endDate.toISOString().split('T')[0];
    this.numberOfPersons = trip.numberOfPersons;
    this.estimatedBudget = trip.estimatedBudget;
  }
}
