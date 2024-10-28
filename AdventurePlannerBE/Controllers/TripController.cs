using AdventurePlannerBE.Services.Trip;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AdventurePlannerBE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TripController : ControllerBase
    {
        private readonly ITripService _tripService;
        private readonly ILogger<TripController> _logger;

        public TripController(ILogger<TripController> logger, ITripService tripService)
        {
            _logger = logger;
            _tripService = tripService;
        }


    }
}
