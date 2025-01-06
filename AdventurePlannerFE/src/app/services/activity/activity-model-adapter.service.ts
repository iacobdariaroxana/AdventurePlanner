import { Injectable } from '@angular/core';
import { ActivityDto } from 'src/app/dtos/activity-dto';
import { ActivityViewModel } from 'src/app/pages/models/activity-view-model';

@Injectable({
  providedIn: 'root',
})
export class ActivityModelAdapterService {
  adaptViewModel(dto: ActivityDto): ActivityViewModel {
    let result = new ActivityViewModel();
    result.updateBasedOnDto(dto);

    return result;
  }
}
