import { Injectable } from '@angular/core';
import { TripDto } from 'src/app/dtos/trip-dto';
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
}
