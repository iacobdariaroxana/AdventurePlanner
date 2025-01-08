using AdventurePlannerBE.Services.Activity;
using AdventurePlannerBE.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AdventurePlannerBE.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ActivityController : ControllerBase
    {
        private readonly IActivityService _activityService;
        private readonly ILogger<ActivityController> _logger;

        public ActivityController(ILogger<ActivityController> logger, IActivityService activityService)
        {
            _logger = logger;
            _activityService = activityService;
        }

        /// <summary>
        /// Creates a new activity.
        /// </summary>
        /// <param name="dto"></param>
        /// <returns>A newly created activity</returns>
        /// <response code="201">Returns the created activity</response>
        /// <response code="400">If the activity dto is null or invalid</response>
        /// <response code="500">Oops!Internal server error</response>
        // POST: api/Activities
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult Post([FromBody] ActivityDTO dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var activity = _activityService.Create(dto);
                return Created("/Activities/" + activity.Id.ToString(), activity);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message);
                return StatusCode(500, "Internal Server Error");
            }
        }

        /// <summary>
        /// Modifies an activity
        /// </summary>
        /// <response code="202">Activity modified</response>
        /// <response code="409">Conflict; data not found in the database</response>
        /// <response code="400">bad request;check DTOs</response>
        /// <response code="500">Oops!Internal server error</response>
        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status202Accepted)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status409Conflict)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult Update(Guid id, [FromBody] ActivityDTO dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var updatedActivity = _activityService.Update(id, dto);
                return Accepted("/Activities/" + updatedActivity.Id.ToString(), updatedActivity);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message);
                return StatusCode(500, "Internal Server Error");
            }
        }

        /// <summary>
        /// Deletes  the Activity
        /// </summary>
        /// <remarks>Please include the id of the activity</remarks>
        /// <response code="204">Activity deleted</response>
        /// <response code="404">Activity not found</response>
        /// <response code="500">Oops!Internal server error</response>
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult Delete(Guid id)
        {
            try
            {
                var deletedActivity = _activityService.Delete(id);

                if (deletedActivity == null)
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
    }
}
