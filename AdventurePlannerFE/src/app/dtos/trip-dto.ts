import { TripViewModel } from '../pages/models/trip-view-model';

export class TripDto {
  name = '';
  startDate = '';
  endDate = '';
  numberOfPersons = 0;
  estimatedBudget = 0;

  updateBasedOnModel(trip: TripViewModel) {
    this.name = trip.name;
    this.startDate = trip.startDate.toISOString().split('T')[0];
    this.endDate = trip.endDate.toISOString().split('T')[0]
    this.numberOfPersons = trip.numberOfPersons;
    this.estimatedBudget = trip.estimatedBudget;
  }
}
