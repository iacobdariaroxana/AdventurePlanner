﻿using AdventurePlannerBE.Services.Trip;
using AdventurePlannerBE.ViewModels;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AdventurePlannerBE.Controllers
{
    [Route("[controller]")]
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

        /// <summary>
        /// Returns the requested trip.
        /// </summary>
        /// <response code="200">Returns the trip</response>
        /// <response code="404">Trip not found</response>
        /// <response code="500">Internal server error</response>  
        // GET: api/Trips
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<TripDTO> Get(Guid id)
        {
            try
            {
                var trip = _tripService.GetById(id);

                if (trip == null)
                {
                    return NotFound();
                }
                return Ok(trip);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message);
                return StatusCode(500, "Internal Server Error");
            }
        }

        /// <summary>
        /// Returns a list with all trips.
        /// </summary>
        /// <response code="200">Returns the trips</response>
        /// <response code="500">Internal server error</response>  
        // GET: api/Trips
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<IEnumerable<TripDTO>> GetAll()
        {
            try
            {
                return Ok(_tripService.GetAll());
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message);
                return StatusCode(500, "Internal Server Error");
            }
        }

        /// <summary>
        /// Creates a new trip.
        /// </summary>
        /// <param name="dto"></param>
        /// <returns>A newly created trip</returns>
        /// <response code="201">Returns the created trip</response>
        /// <response code="400">If the trip dto is null or invalid</response>
        /// <response code="500">Oops!Internal server error</response>
        // POST: api/Trips
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult Post([FromBody] TripDTO dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var trip = _tripService.Create(dto);
                return Created("/Trips/" + trip.Id.ToString(), trip);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message);
                return StatusCode(500, "Internal Server Error");
            }
        }

        /// <summary>
        /// Deletes  the Trip
        /// </summary>
        /// <remarks>Please include the id of the Trip</remarks>
        /// <response code="204">Trip deleted</response>
        /// <response code="404">Trip not found</response>
        /// <response code="500">Oops!Internal server error</response>
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult Delete(Guid id)
        {
            try
            {
                var deletedTrip = _tripService.Delete(id);

                if (deletedTrip == null)
                {
                    return NotFound();
                }

               return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message);
                return StatusCode(500, "Internal Server Error");
            }
        }

        /// <summary>
        /// Returns the activities for a requested trip.
        /// </summary>
        /// <response code="200">Returns the activities</response>
        /// <response code="404">Trip not found</response>
        /// <response code="500">Internal server error</response>  
        [HttpGet("{id}/activities")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<IEnumerable<ActivityDTO>> GetActivities(Guid id)
        {
            try
            {
                var activities = _tripService.GetAllActivities(id);

                return Ok(activities);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message);
                return StatusCode(500, "Internal Server Error");
            }
        }
    }
}
