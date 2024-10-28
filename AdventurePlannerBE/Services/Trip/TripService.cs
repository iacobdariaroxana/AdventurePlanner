using AdventurePlannerBE.DB;

namespace AdventurePlannerBE.Services.Trip
{
    public class TripService: ITripService
    {
        public IRepositoryWrapper Repository { get; }

        public TripService(IRepositoryWrapper repository)
        {
            Repository = repository;
        }
    }
}
