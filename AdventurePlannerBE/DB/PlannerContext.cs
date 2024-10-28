using AdventurePlannerBE.Models;
using Microsoft.EntityFrameworkCore;

namespace AdventurePlannerBE.DB
{
    public class PlannerContext: DbContext
    {
        public PlannerContext(DbContextOptions<PlannerContext> options): base(options) { }

        public DbSet<Trip> Trips { get; set; }
    }
}
