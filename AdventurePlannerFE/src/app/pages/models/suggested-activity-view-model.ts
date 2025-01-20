import { EMPTY_GUID } from 'src/app/constants';
import { ActivityViewModel } from './activity-view-model';

export class SuggestedActivityViewModel extends ActivityViewModel {
  reviews: { rating: string; text: string; publishTimeAgo: string }[] = [];
  photosReferences: string[] = [];
  openingHours: string[] = [];

  public get isNew(): boolean {
    return this.id == '' || this.id == EMPTY_GUID;
  }
}
