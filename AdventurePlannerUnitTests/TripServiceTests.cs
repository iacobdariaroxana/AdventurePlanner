using AdventurePlannerBE.DB;
using Microsoft.EntityFrameworkCore;
using AdventurePlannerBE.Models;
using AdventurePlannerBE.Services.Trip;
using Activity = AdventurePlannerBE.Models.Activity;
using AdventurePlannerBE.Enums;

namespace AdventurePlannerUnitTests
{
    public class TripServiceTests
    {
        private readonly PlannerContext mockDbContext;

        public TripServiceTests()
        {
            var options = new DbContextOptionsBuilder<PlannerContext>()
                .UseInMemoryDatabase(databaseName: "TestDatabase")
                .Options;
            mockDbContext = new PlannerContext(options);
        }

        [Fact]
        public void CalculateTotalEstimatedBudget_ShouldReturnCorrectTotalBudget_WithPriceLevels()
        {
            // Arrange
            var tripService = new TripBudgetCalculatorService(mockDbContext);
            var trip = new Trip
            {
                Id = Guid.NewGuid(),
                Name = "Budget Trip",
                EstimatedBudget = 500,
                Activities = []
            };
            var activity1 = new Activity
            {
                Id = Guid.NewGuid(),
                Name = "Luxury Spa",
                Location = "Copenhaga",
                WebsiteUri = "https://luxuryspa.example.com",
                PriceLevel = PriceLevel.PRICE_LEVEL_VERY_EXPENSIVE
            };
            var activity2 = new Activity
            {
                Id = Guid.NewGuid(),
                Name = "Litte mermaid Visit",
                Location = "Copenhaga",
                WebsiteUri = "https://littelemermaid.example.com",
                PriceLevel = PriceLevel.PRICE_LEVEL_FREE
            };
            var activity3 = new Activity
            {
                Id = Guid.NewGuid(),
                Name = "Museum Tour",
                Location = "Copenhaga",
                WebsiteUri = "https://museum.example.com",
                PriceLevel = PriceLevel.PRICE_LEVEL_MODERATE
            };
            trip.Activities.Add(activity1);
            trip.Activities.Add(activity2);
            trip.Activities.Add(activity3);
            mockDbContext.Trips.Add(trip);
            mockDbContext.SaveChanges();

            // Act
            var result = tripService.CalculateTotalEstimatedBudget(trip.Id);

            // Assert
            Assert.Equal(250, result);
            Assert.True(result < trip.EstimatedBudget);
        }


        [Fact]
        public void CalculateTotalEstimatedBudget_ShouldReturnZero_WhenNoActivities()
        {
            // Arrange
            var tripService = new TripBudgetCalculatorService(mockDbContext);
            var trip = new Trip
            {
                Id = Guid.NewGuid(),
                Name = "Empty Trip",
                EstimatedBudget = 300,
                Activities = new List<Activity>()
            };
            mockDbContext.Trips.Add(trip);
            mockDbContext.SaveChanges();

            // Act
            var result = tripService.CalculateTotalEstimatedBudget(trip.Id);

            // Assert
            Assert.Equal(0, result);
        }

        [Fact]
        public void CalculateTotalEstimatedBudget_ShouldHandleNullPriceLevels()
        {
            // Arrange
            var tripService = new TripBudgetCalculatorService(mockDbContext);
            var trip = new Trip
            {
                Id = Guid.NewGuid(),
                Name = "Trip with empty Price Levels",
                EstimatedBudget = 400,
                Activities = []
            };
            var activity1 = new Activity
            {
                Id = Guid.NewGuid(),
                Name = "Undefined Activity 1",
                Location = "Unknown",
                WebsiteUri = "https://undefined.example.com",
            };
            var activity2 = new Activity
            {
                Id = Guid.NewGuid(),
                Name = "Undefined Activity 2",
                Location = "Unknown",
                WebsiteUri = "https://undefined.example.com",
            };
            trip.Activities.Add(activity1);
            trip.Activities.Add(activity2);
            mockDbContext.Trips.Add(trip);
            mockDbContext.SaveChanges();

            // Act
            var result = tripService.CalculateTotalEstimatedBudget(trip.Id);

            // Assert
            Assert.Equal(0, result);
        }

    }
}