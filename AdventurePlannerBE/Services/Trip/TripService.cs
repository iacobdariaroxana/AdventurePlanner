using AdventurePlannerBE.DB;
using AdventurePlannerBE.ViewModels;
using AdventurePlannerBE.Models;
using Microsoft.EntityFrameworkCore;
using AdventurePlannerBE.Enums;

namespace AdventurePlannerBE.Services.Trip
{
    public class TripService : ITripService
    {
        public IRepositoryWrapper Repository { get; }

        public TripService(IRepositoryWrapper repository)
        {
            Repository = repository;
        }

        public TripDTO Create(TripDTO dto)
        {
            var trip = new Models.Trip()
            {
                Name = dto.Name,
                StartDate = dto.StartDate,
                EndDate = dto.EndDate,
                NumberOfPersons = dto.NumberOfPersons,
                EstimatedBudget = dto.EstimatedBudget,
            };

            Repository.Trips.Create(trip);
            Repository.Save();

            dto.Id = trip.Id;
            return dto;
        }

        public TripDTO? Delete(Guid id)
        {
            var trip = Repository.Trips.FindByCondition(trip => trip.Id == id).FirstOrDefault();

            if (trip == null)
            {
                return null;
            }

            Repository.Trips.Delete(trip);
            Repository.Save();

            return new TripDTO().MapData(trip);
        }

        public IEnumerable<TripDTO> GetAll()
        {
            return Repository.Trips.FindAll().Select(trip => new TripDTO().MapData(trip));
        }

        public DetailedTripDTO GetById(Guid id)
        {
            var trip = Repository.Trips.FindByCondition(trip => trip.Id == id).Include(t => t.Activities).FirstOrDefault();

            if (trip == null)
            {
                return null;
            }

            return new DetailedTripDTO().MapData(trip);
        }

        public IEnumerable<ActivityDTO> GetAllActivities(Guid id)
        {
            var activities = Repository.Activities.FindByCondition(activity => activity.TripId == id).ToList();

            return activities.Select(activity => new ActivityDTO().MapData(activity)); ;
        }
    }
}
