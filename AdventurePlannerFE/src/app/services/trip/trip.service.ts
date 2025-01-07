import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { AppConfigService } from '../app-config/app-config.service';
import { TripDto } from 'src/app/dtos/trip-dto';
import { TripModelAdapterService } from './trip-model-adapter.service';
import { TripViewModel } from 'src/app/pages/models/trip-view-model';
import { DetailedTripDto } from 'src/app/dtos/detailed-trip-dto';
import { DetailedTripViewModel } from 'src/app/pages/models/detailed-trip-view-model';
import { ActivityViewModel } from 'src/app/pages/models/activity-view-model';
import { ActivityModelAdapterService } from '../activity/activity-model-adapter.service';
import { ActivityDto } from 'src/app/dtos/activity-dto';

@Injectable({
  providedIn: 'root',
})
export class TripService {
  public subscriptions: Subscription[] = [];
  serviceName = 'Trip';

  constructor(
    private http: HttpClient,
    private appConfig: AppConfigService,
    private tripAdapter: TripModelAdapterService,
    private activityAdapter: ActivityModelAdapterService
  ) {}

  ngOnDestroy(): void {
    this.subscriptions.forEach((subs) => subs.unsubscribe());
  }

  getById(id: string): Observable<DetailedTripViewModel> {
    const url =
      this.appConfig.Configuration?.apiUrl + this.serviceName + '/' + id;

    return this.http.get<DetailedTripDto>(url).pipe(
      map((value) => {
        return this.tripAdapter.adaptDetailedViewModel(value);
      })
    );
  }

  getTripActivities(id: string): Observable<ActivityViewModel[]> {
    const url =
      this.appConfig.Configuration?.apiUrl + this.serviceName + '/' + id;

    return this.http
      .get<ActivityDto[]>(url)
      .pipe(
        map((data: any[]) =>
          data.map((item) => this.activityAdapter.adaptViewModel(item))
        )
      );
  }

  getTrips(): Observable<TripViewModel[]> {
    const url = this.appConfig.Configuration?.apiUrl + this.serviceName;

    return this.http
      .get<TripDto[]>(url)
      .pipe(
        map((data: any[]) =>
          data.map((item) => this.tripAdapter.adaptViewModel(item))
        )
      );
  }

  insertTrip(dto: TripDto): Observable<TripDto> {
    const url = this.appConfig.Configuration?.apiUrl + this.serviceName;
    return this.http.post<TripDto>(url, dto);
  }

  deleteTrip(tripId: string): Observable<any> {
    const url = this.appConfig.Configuration?.apiUrl + this.serviceName;
    return this.http.delete(url + '/' + tripId);
  }
}
