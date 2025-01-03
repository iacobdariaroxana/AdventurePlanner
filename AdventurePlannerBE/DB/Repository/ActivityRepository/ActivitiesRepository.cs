using AdventurePlannerBE.Models;

namespace AdventurePlannerBE.DB.Repository.ActivityRepository
{
    public class ActivitiesRepository: RepositoryBase<Activity>, IActivitiesRepository
    {
        private PlannerContext _plannerContext;
        public ActivitiesRepository(PlannerContext plannerContext): base(plannerContext)
        {
            _plannerContext = plannerContext;
        }
    }
}
