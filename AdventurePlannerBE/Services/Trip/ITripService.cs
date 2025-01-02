using AdventurePlannerBE.DB;
using AdventurePlannerBE.ViewModels;

namespace AdventurePlannerBE.Services.Trip
{
    public interface ITripService
    {
        IRepositoryWrapper Repository { get; }

        TripDTO Create(TripDTO dto);
        TripDTO? Delete(Guid id);
    }
}
