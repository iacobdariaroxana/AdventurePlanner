using AdventurePlannerBE.Models;

namespace AdventurePlannerBE.ViewModels
{
    public class DetailedTripDTO : TripDTO
    {
        public List<ActivityDTO> ActivityDTOs { get; set; }

        public new DetailedTripDTO MapData(Trip trip)
        {
            Id = trip.Id;
            Name = trip.Name;
            StartDate = trip.StartDate;
            EndDate = trip.EndDate;
            NumberOfPersons = trip.NumberOfPersons;
            EstimatedBudget = trip.EstimatedBudget;

            ActivityDTOs = new List<ActivityDTO>();
            foreach (var activity in trip.Activities)
            {
                ActivityDTOs.Add(new ActivityDTO().MapData(activity));
            }

            return this;
        }
    }
}
