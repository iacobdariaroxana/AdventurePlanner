using AdventurePlannerBE.Enums;
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
        public Guid TripId { get; set; }
        public float Rating { get; set; }
        public int RatingCounts { get; set; }
        public string WebsiteUri { get; set; }
        public bool GoodForChildren { get; set; }
        public PriceLevel PriceLevel { get; set; }

        public ActivityDTO MapData(Activity activity)
        {
            Id = activity.Id;
            Name = activity.Name;
            Date = activity.Date;
            Location = activity.Location;
            TripId = activity.TripId;
            Rating = activity.Rating;
            RatingCounts = activity.RatingCounts;
            WebsiteUri = activity.WebsiteUri;
            GoodForChildren = activity.GoodForChildren;
            PriceLevel = activity.PriceLevel;

            return this;
        }
    }
}
