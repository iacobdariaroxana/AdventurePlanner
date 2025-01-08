import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppConfigService } from '../app-config/app-config.service';
import { ActivityDto } from 'src/app/dtos/activity-dto';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  public subscriptions: Subscription[] = [];
  serviceName = 'Activity';

  constructor(private http: HttpClient, private appConfig: AppConfigService) {}

  ngOnDestroy(): void {
    this.subscriptions.forEach((subs) => subs.unsubscribe());
  }

  insertActivity(dto: ActivityDto): Observable<ActivityDto> {
    const url = this.appConfig.Configuration?.apiUrl + this.serviceName;
    return this.http.post<ActivityDto>(url, dto);
  }

  updateActivity(id: string, dto: ActivityDto): Observable<ActivityDto> {
    const url = this.appConfig.Configuration?.apiUrl + this.serviceName + '/' + id;;
    return this.http.put<ActivityDto>(url, dto);
  }

  deleteActivity(activityId: string): Observable<any> {
    const url = this.appConfig.Configuration?.apiUrl + this.serviceName;
    return this.http.delete(url + '/' + activityId);
  }
}
