import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from '../app-config/app-config.service';
import { map, Observable } from 'rxjs';
import { SuggestedActivityViewModel } from 'src/app/pages/models/suggested-activity-view-model';
import { PriceLevel } from 'src/app/pages/models/enums/price-level';

@Injectable({
  providedIn: 'root',
})
export class GoogleApiService {
  apiKey = '';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Goog-Api-Key': this.apiKey,
    'X-Goog-FieldMask':
      'places.rating,places.websiteUri,places.priceLevel,places.userRatingCount,places.displayName,places.primaryType,places.shortFormattedAddress,places.reviews,places.photos,places.goodForChildren',
  });

  constructor(private appConfig: AppConfigService, private http: HttpClient) {}

  getActivities(data: any): Observable<SuggestedActivityViewModel[]> {
    const url =
      this.appConfig.Configuration?.googleApiUrl + 'places:searchText';
    return this.http
      .post<{ places: any[] }>(url, data, { headers: this.headers })
      .pipe(
        map((response) =>
          response.places.map((item) => {
            let result = new SuggestedActivityViewModel();
            result.name = item.displayName.text;
            result.location = item.shortFormattedAddress;
            result.rating = item.rating;
            result.ratingCounts = item.userRatingCount;
            result.websiteUri = item.websiteUri;
            result.goodForChildren = item.goodForChildren;
            if (item.priceLevel) {
              result.priceLevel =
                PriceLevel[item.priceLevel as keyof typeof PriceLevel];
            } else {
              result.priceLevel = PriceLevel.PRICE_LEVEL_UNSPECIFIED;
            }

            if (item.reviews) {
              result.reviews = item.reviews.map(
                (review: {
                  text: { text: string };
                  rating: string;
                  relativePublishTimeDescription: string;
                }) => {
                  return {
                    text: review.text?.text,
                    rating: review.rating,
                    publishTimeAgo: review.relativePublishTimeDescription,
                  };
                }
              );
            }

            if (item.photos) {
              result.photosReferences = item.photos
                .slice(0, 4)
                .map((item: { name: any }) => item.name);
            }
            return result;
          })
        )
      );
  }

  getPhoto(photoName: string): Observable<any> {
    let url =
      this.appConfig.Configuration?.googleApiUrl +
      `${photoName}/media?key=${this.apiKey}&max_height_px=300&skipHttpRedirect=true`;

    return this.http
      .get<{ photoUri: string }>(url)
      .pipe(map((response) => response.photoUri));
  }
}
