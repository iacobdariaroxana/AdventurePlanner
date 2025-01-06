import { DetailedTripDto } from 'src/app/dtos/detailed-trip-dto';
import { ActivityViewModel } from './activity-view-model';

export class DetailedTripViewModel {
  id = '';
  name = '';
  startDate!: Date;
  endDate!: Date;
  numberOfPersons = 0;
  estimatedBudget = 0;
  activities: ActivityViewModel[] = [];

  updateBasedOnDto(dto: DetailedTripDto) {
    this.id = dto.id;
    this.name = dto.name;
    this.startDate = new Date(dto.startDate);
    this.endDate = new Date(dto.endDate);
    this.numberOfPersons = dto.numberOfPersons;
    this.estimatedBudget = dto.estimatedBudget;

    dto.activityDTOs.forEach((dto) => {
      let result = new ActivityViewModel();
      result.updateBasedOnDto(dto);
      this.activities.push(result);
    });
  }
}
