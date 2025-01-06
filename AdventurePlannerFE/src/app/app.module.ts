import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfigService } from './services/app-config/app-config.service';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppHeaderComponent } from './pages/app-header/app-header.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { TripPopUpComponent } from './pages/home-page/trip-pop-up/trip-pop-up.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { TripCardComponent } from './pages/home-page/trip-card/trip-card.component';
import { AppFooterComponent } from './pages/app-footer/app-footer.component';
import { TripDetailsComponent } from './pages/home-page/trip-details/trip-details.component';
import { ActivityCardComponent } from './pages/home-page/activity-card/activity-card.component';

export function appConfigFactory(appConfigService: AppConfigService) {
  return () => appConfigService.loadConfig();
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AppHeaderComponent,
    AboutUsPageComponent,
    TripPopUpComponent,
    TripCardComponent,
    AppFooterComponent,
    TripDetailsComponent,
    ActivityCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule
  ],
  providers: [
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: appConfigFactory,
      deps: [AppConfigService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
