import { Injectable } from '@angular/core';
import { DetailedTripDto } from 'src/app/dtos/detailed-trip-dto';
import { TripDto } from 'src/app/dtos/trip-dto';
import { DetailedTripViewModel } from 'src/app/pages/models/detailed-trip-view-model';
import { TripViewModel } from 'src/app/pages/models/trip-view-model';

@Injectable({
  providedIn: 'root',
})
export class TripModelAdapterService {
  adaptViewModel(dto: TripDto): TripViewModel {
    let result = new TripViewModel();
    result.updateBasedOnDto(dto);

    return result;
  }

  adaptDetailedViewModel(dto: DetailedTripDto): DetailedTripViewModel {
    let result = new DetailedTripViewModel();
    result.updateBasedOnDto(dto);

    return result;
  }
}
