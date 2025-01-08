import { EMPTY_GUID } from '../constants';
import { PriceLevel } from '../pages/models/enums/price-level';
import { SuggestedActivityViewModel } from '../pages/models/suggested-activity-view-model';

export class ActivityDto {
  id = '';
  name = '';
  location = '';
  date: string | null = null;
  rating = 0;
  ratingCounts = 0;
  websiteUri = '';
  goodForChildren = false;
  tripId = '';
  priceLevel: PriceLevel = 0;

  updateBasedOnModel(model: SuggestedActivityViewModel): ActivityDto {
    let result = new ActivityDto();
    if (model.id == '') {
      this.id = EMPTY_GUID;
    } else {
      this.id = model.id;
    }

    this.name = model.name;
    this.location = model.location;
    if (model.date) {
      this.date = model.date.toISOString().split('T')[0];
    }
    this.rating = model.rating;
    this.ratingCounts = model.ratingCounts;
    this.websiteUri = model.websiteUri;
    this.goodForChildren = model.goodForChildren;
    this.tripId = model.tripId;
    this.priceLevel = model.priceLevel;

    return result;
  }
}
