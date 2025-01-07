import { ActivityViewModel } from './activity-view-model';

export class SuggestedActivityViewModel extends ActivityViewModel {
  reviews: { rating: string; text: string; publishTimeAgo: string }[] = [];
  photosReferences: string[] = [];
}
