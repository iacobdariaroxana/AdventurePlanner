import { ActivityDto } from "./activity-dto";
import { TripDto } from "./trip-dto";

export class DetailedTripDto extends TripDto {
	activityDTOs!: ActivityDto[];
}