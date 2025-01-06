import { TripDto } from 'src/app/dtos/trip-dto';

export class TripViewModel {
  id = '';
  name = '';
  startDate!: Date;
  endDate!: Date;
  numberOfPersons = 0;
  estimatedBudget = 0;

  updateBasedOnDto(dto: TripDto) {
    this.id = dto.id;
    this.name = dto.name;
    this.startDate = new Date(dto.startDate);
    this.endDate = new Date(dto.endDate);
    this.numberOfPersons = dto.numberOfPersons;
    this.estimatedBudget = dto.estimatedBudget;
  }
}
