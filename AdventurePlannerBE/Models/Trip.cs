using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace AdventurePlannerBE.Models
{
    public class Trip
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 3)]
        public required string Name { get; set; }

        public DateOnly StartDate { get; set; }

        public DateOnly EndDate { get; set; }

        [Range(0, int.MaxValue)]
        public int NumberOfPersons { get; set; }

        [Range(0, int.MaxValue)]
        public int EstimatedBudget { get; set; }
    }
}
