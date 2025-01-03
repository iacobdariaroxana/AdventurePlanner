using AdventurePlannerBE.DB;
using AdventurePlannerBE.Services.Activity;
using AdventurePlannerBE.Services.Trip;

namespace AdventurePlannerBE.Services
{
    public static class ServiceCollectionExtension
    {
        public static IServiceCollection Bootstrat(this IServiceCollection self)
        {
            self.AddScoped<IRepositoryWrapper, RepositoryWrapper>();
            self.AddScoped<ITripService, TripService>();
            self.AddScoped<IActivityService, ActivityService>();
            return self;
        }
    }
}
