using AdventurePlannerBE.Models;
using System.ComponentModel.DataAnnotations;

namespace AdventurePlannerBE.ViewModels
{
    public class ActivityDTO
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }

        public DateOnly Date { get; set; }
        public int Price { get; set; }

         public ActivityDTO MapData(Activity activity)
        {
            Id = activity.Id;
            Name = activity.Name;
            Date = activity.Date;
            Location = activity.Location;
            Price = activity.Price;

            return this;
        }
    }
}
