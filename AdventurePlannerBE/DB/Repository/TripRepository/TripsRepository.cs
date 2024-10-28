using AdventurePlannerBE.Models;

namespace AdventurePlannerBE.DB.Repository.TripRepository
{
    public class TripsRepository: RepositoryBase<Trip>, ITripsRepository
    {
        private PlannerContext _plannerContext;
        public TripsRepository(PlannerContext plannerContext): base(plannerContext)
        {
            _plannerContext = plannerContext;
        }
    }
}
