using AdventurePlannerBE.DB;

namespace AdventurePlannerBE.Services.Trip
{
    public interface ITripService
    {
        IRepositoryWrapper Repository { get; }
    }
}
