import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { AppConfigService } from '../app-config/app-config.service';
import { TripDto } from 'src/app/dtos/trip-dto';
import { TripModelAdapterService } from './trip-model-adapter.service';
import { TripViewModel } from 'src/app/pages/models/trip-view-model';

@Injectable({
  providedIn: 'root',
})
export class TripService {
  public subscriptions: Subscription[] = [];
  serviceName = 'Trip';

  constructor(
    private http: HttpClient,
    private appConfig: AppConfigService,
    private adapter: TripModelAdapterService
  ) {}

  ngOnDestroy(): void {
    this.subscriptions.forEach((subs) => subs.unsubscribe());
  }

  getTrips(): Observable<TripViewModel[]> {
    const url = this.appConfig.Configuration?.apiUrl + this.serviceName;

    return this.http
      .get<TripDto[]>(url)
      .pipe(
        map((data: any[]) =>
          data.map((item) => this.adapter.adaptViewModel(item))
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
