import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from '../app-config/app-config.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoogleApiService {
  url = this.appConfig.Configuration?.googleApiUrl + ':searchText';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Goog-Api-Key': '',
    'X-Goog-FieldMask':
      'places.rating,places.websiteUri,places.priceLevel,places.userRatingCount,places.displayName,places.primaryType,places.shortFormattedAddress,places.reviews,places.photos,places.goodForChildren',
  });

  constructor(private appConfig: AppConfigService, private http: HttpClient) {}

  getActivities(data: any): Observable<any> {
    // console.log(data);
    return this.http.post(this.url, data, { headers: this.headers });
  }
}
