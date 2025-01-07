import { Component, Input } from '@angular/core';
import { PriceLevel } from '../../models/enums/price-level';
import { ActivityViewModel } from '../../models/activity-view-model';

@Component({
  selector: 'app-activity-common-card-content',
  templateUrl: './activity-common-card-content.component.html',
  styleUrls: ['./activity-common-card-content.component.scss'],
})
export class ActivityCommonCardContentComponent {
  @Input() activity!: ActivityViewModel;

  getPriceLevelText(priceLevel: PriceLevel): string {
    switch (priceLevel) {
      case PriceLevel.PRICE_LEVEL_FREE:
        return 'Free';
      case PriceLevel.PRICE_LEVEL_INEXPENSIVE:
        return 'Inexpensive';
      case PriceLevel.PRICE_LEVEL_MODERATE:
        return 'Moderate';
      case PriceLevel.PRICE_LEVEL_EXPENSIVE:
        return 'Expensive';
      case PriceLevel.PRICE_LEVEL_VERY_EXPENSIVE:
        return 'Very Expensive';
      default:
        return 'Unspecified';
    }
  }

  getProgressValue(priceLevel: PriceLevel): number {
    const minPriceLevel = 0;
    const maxPriceLevel = 5;
    return (
      ((priceLevel - minPriceLevel) / (maxPriceLevel - minPriceLevel)) * 100
    );
  }
}
