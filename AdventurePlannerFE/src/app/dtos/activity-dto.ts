import { PriceLevel } from "../pages/models/enums/price-level";

export class ActivityDto {
	id = '';
	name = '';
	location = '';
	date = '';
	rating = 0;
	ratingCounts = 0;
	websiteUri = '';
	goodForChildren = false;
	tripId = '';
	priceLevel: PriceLevel = 0;
}
