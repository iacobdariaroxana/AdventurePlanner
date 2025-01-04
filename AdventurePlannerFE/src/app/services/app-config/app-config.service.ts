import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface AppConfig {
  apiUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  Configuration?: AppConfig;

  constructor(private http: HttpClient) {}

  loadConfig(): Promise<void> {
    return firstValueFrom(
      this.http.get<AppConfig>('./assets/config.json')
    ).then((config) => {
      this.Configuration = config;
    });
  }
}
