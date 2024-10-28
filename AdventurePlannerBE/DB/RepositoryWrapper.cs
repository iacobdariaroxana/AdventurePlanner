using AdventurePlannerBE.DB.Repository.TripRepository;

namespace AdventurePlannerBE.DB
{
    public class RepositoryWrapper : IRepositoryWrapper
    {
        private readonly PlannerContext _plannerContext;
        private ITripsRepository _tripsRepository;

        public RepositoryWrapper(PlannerContext plannerContext)
        {
            _plannerContext = plannerContext;
        }

        public ITripsRepository Trips => _tripsRepository ??= new TripsRepository(_plannerContext);

        public void Save()
        {
            _plannerContext.SaveChanges();
        }
    }
}
