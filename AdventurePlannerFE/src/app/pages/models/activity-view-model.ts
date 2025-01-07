import { ActivityDto } from 'src/app/dtos/activity-dto';
import { PriceLevel } from './enums/price-level';

export class ActivityViewModel {
  id = '';
  name = '';
  location = '';
  date: Date | null | undefined;
  tripId = '';
  rating = 0;
  ratingCounts = 0;
  websiteUri = '';
  goodForChildren = false;
  priceLevel: PriceLevel = 0;

  updateBasedOnDto(dto: ActivityDto) {
    this.id = dto.id;
    this.name = dto.name;
    this.location = dto.location;
    if (dto.date) {
      this.date = new Date(dto.date);
    }
    this.tripId = dto.tripId;
    this.rating = dto.rating;
    this.ratingCounts = dto.ratingCounts;
    this.websiteUri = dto.websiteUri;
    this.goodForChildren = dto.goodForChildren;
    this.priceLevel = dto.priceLevel;
  }
}
