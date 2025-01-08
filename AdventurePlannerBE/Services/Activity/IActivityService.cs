using AdventurePlannerBE.DB;
using AdventurePlannerBE.ViewModels;

namespace AdventurePlannerBE.Services.Activity
{
    public interface IActivityService
    {
        IRepositoryWrapper Repository { get; }

        ActivityDTO Create(ActivityDTO dto);
        ActivityDTO Update(Guid id, ActivityDTO dto);
        ActivityDTO? Delete(Guid id);
    }
}
