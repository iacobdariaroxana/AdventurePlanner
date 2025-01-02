using AdventurePlannerBE.Models;
using System.ComponentModel.DataAnnotations;

namespace AdventurePlannerBE.ViewModels
{
    public class TripDTO
    {
        public Guid Id { get; set; }
        public string Name { get; set; }

        public DateOnly StartDate { get; set; }

        public DateOnly EndDate { get; set; }

        public int NumberOfPersons { get; set; }

        public int EstimatedBudget { get; set; }

        public TripDTO MapData(Trip trip)
        {
            Id = trip.Id;
            Name = trip.Name;
            StartDate = trip.StartDate;
            EndDate = trip.EndDate;
            NumberOfPersons = trip.NumberOfPersons;
            EstimatedBudget = trip.EstimatedBudget;

            return this;
        }
    }
}
