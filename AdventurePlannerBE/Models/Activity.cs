using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

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

        public DateOnly Date { get; set; }

        [Range(0, int.MaxValue)]
        public int Price { get; set; }

        [ForeignKey("Trips")]
        public Guid TripId { get; set; }
    }
}
