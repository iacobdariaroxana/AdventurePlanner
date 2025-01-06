using AdventurePlannerBE.DB;
using AdventurePlannerBE.ViewModels;
using AdventurePlannerBE.Models;

namespace AdventurePlannerBE.Services.Activity
{
    public class ActivityService: IActivityService
    {
        public IRepositoryWrapper Repository { get; }

        public ActivityService(IRepositoryWrapper repository)
        {
            Repository = repository;
        }

        public ActivityDTO Create(ActivityDTO dto)
        {
            var activity = new Models.Activity()
            {
                Name = dto.Name,
                Date = dto.Date,
                Location = dto.Location,
                Price = dto.Price,
                TripId = dto.TripId,
            };

            Repository.Activities.Create(activity);
            Repository.Save();

            dto.Id = activity.Id;
            return dto;
        }

        public ActivityDTO? Delete(Guid id)
        {
            var activity = Repository.Activities.FindByCondition(activity => activity.Id == id).FirstOrDefault();

            if (activity == null)
            {
                return null;
            }

            Repository.Activities.Delete(activity);
            Repository.Save();

            return new ActivityDTO().MapData(activity);
        }
    }
}
