using AdventurePlannerBE.DB.Repository.TripRepository;

namespace AdventurePlannerBE.DB
{
    public interface IRepositoryWrapper
    {
        ITripsRepository Trips { get; }

        void Save();
    }
}
