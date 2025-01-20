using AdventurePlannerBE.DB;
using AdventurePlannerBE.Enums;
using AdventurePlannerBE.Models;
using Microsoft.EntityFrameworkCore;

namespace AdventurePlannerBE.Services.Trip
{
    public class TripBudgetCalculatorService
    {
        private PlannerContext _context { get; }

        public TripBudgetCalculatorService(PlannerContext context)
        {
            _context = context;
        }

        public int CalculateTotalEstimatedBudget(Guid id)
        {
            var trip = _context.Trips.Include(t => t.Activities).FirstOrDefault(t => t.Id == id) ?? throw new KeyNotFoundException("Trip not found");

            int totalBudget = trip.Activities.Sum(a =>
            {
                return a.PriceLevel switch
                {
                    PriceLevel.PRICE_LEVEL_FREE => 0,
                    PriceLevel.PRICE_LEVEL_INEXPENSIVE => 20,
                    PriceLevel.PRICE_LEVEL_MODERATE => 50,
                    PriceLevel.PRICE_LEVEL_EXPENSIVE => 100,
                    PriceLevel.PRICE_LEVEL_VERY_EXPENSIVE => 200,
                    _ => 0
                };
            });

            return totalBudget;
        }
    }
}
