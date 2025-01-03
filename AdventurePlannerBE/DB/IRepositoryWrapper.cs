using AdventurePlannerBE.DB.Repository.TripRepository;
using AdventurePlannerBE.DB.Repository.ActivityRepository;

namespace AdventurePlannerBE.DB
{
    public interface IRepositoryWrapper
    {
        ITripsRepository Trips { get; }

        IActivitiesRepository Activities { get; }

        void Save();
    }
}
