using AdventurePlannerBE.DB.Repository.ActivityRepository;
using AdventurePlannerBE.DB.Repository.TripRepository;

namespace AdventurePlannerBE.DB
{
    public class RepositoryWrapper : IRepositoryWrapper
    {
        private readonly PlannerContext _plannerContext;
        private ITripsRepository _tripsRepository;
        private IActivitiesRepository _activitiesRepository;
        public RepositoryWrapper(PlannerContext plannerContext)
        {
            _plannerContext = plannerContext;
        }

        public ITripsRepository Trips => _tripsRepository ??= new TripsRepository(_plannerContext);

        public IActivitiesRepository Activities => _activitiesRepository ??= new ActivitiesRepository(_plannerContext);
        public void Save()
        {
            _plannerContext.SaveChanges();
        }
    }
}
