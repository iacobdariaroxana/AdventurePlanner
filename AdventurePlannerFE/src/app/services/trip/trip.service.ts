import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppConfigService } from '../app-config/app-config.service';
import { TripDto } from 'src/app/dtos/trip-dto';

@Injectable({
  providedIn: 'root',
})
export class TripService {
  public subscriptions: Subscription[] = [];
  serviceName = 'Trip';

  constructor(private http: HttpClient, private appConfig: AppConfigService) {}

  ngOnDestroy(): void {
    this.subscriptions.forEach((subs) => subs.unsubscribe());
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
