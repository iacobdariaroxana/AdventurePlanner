using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using AdventurePlannerBE.Enums;

namespace AdventurePlannerBE.Models
{
    public class Activity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 3)]
        public required string Name { get; set; }

        [Required]
        [StringLength(100, MinimumLength = 3)]
        public required string Location { get; set; }

        public DateOnly? Date { get; set; }

        [ForeignKey("Trips")]
        public Guid TripId { get; set; }

        [Range(0.0, 5.0, ErrorMessage = "Rating must be between 0.0 and 5.0.")]
        public float Rating { get; set; }

        [Range(0, int.MaxValue)]
        public int RatingCounts { get; set; }

        [Url(ErrorMessage = "The WebsiteUri field must be a valid URL.")]
        public string WebsiteUri { get; set; }

        public bool GoodForChildren { get; set; }

        public PriceLevel PriceLevel { get; set; }
    }
}
