import { ActivityDto } from 'src/app/dtos/activity-dto';

export class ActivityViewModel {
  id = '';
  name = '';
  location = '';
  date!: Date;
  price = 0;
  tripId = '';

  updateBasedOnDto(dto: ActivityDto) {
    this.id = dto.id;
    this.name = dto.name;
    this.location = dto.location;
    this.date = new Date(dto.date);
    this.price = dto.price;
    this.tripId = dto.tripId;
  }
}
