using AdventurePlannerBE.DB;
using AdventurePlannerBE.Services.Trip;

namespace AdventurePlannerBE.Services
{
    public static class ServiceCollectionExtension
    {
        public static IServiceCollection Bootstrat(this IServiceCollection self)
        {
            self.AddScoped<IRepositoryWrapper, RepositoryWrapper>();
            self.AddScoped<ITripService, TripService>();
            return self;
        }
    }
}
