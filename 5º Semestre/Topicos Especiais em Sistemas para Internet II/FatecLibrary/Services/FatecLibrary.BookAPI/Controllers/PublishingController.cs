using FatecLibrary.BookAPI.DTO.Entities;
using FatecLibrary.BookAPI.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FatecLibrary.BookAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class PublishingController : Controller
    {
        private readonly IPublishingService _publishingService;

        public PublishingController(IPublishingService publishingService)
        {
            _publishingService = publishingService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<PublishingDTO>>> Get()
        {
            var publishersDTO = await _publishingService.GetAll();
            if(publishersDTO == null)
                return NotFound("Publishers not found !");
            return Ok(publishersDTO);
        }

        [HttpGet("books")]
        public async Task<ActionResult<IEnumerable<PublishingDTO>>> GetPublisheresBooks()
        {
            var publishersDTO = await _publishingService.GetPublishersBooks();
            if(publishersDTO is null)
                return NotFound("Publishers not found !");
            return Ok(publishersDTO);
        }

        [HttpGet("{id:int}", Name = "GetPublishing")]
        public async Task<ActionResult<PublishingDTO>> Get(int id)
        {
            var publishingDTO = await _publishingService.GetById(id);
            if(publishingDTO == null)
                return NotFound("Publishing not found!");
            return Ok(publishingDTO);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] PublishingDTO publishingDTO)
        {
            if(publishingDTO is null)
                return BadRequest("Invalid data!");
            await _publishingService.Create(publishingDTO);
            return new CreatedAtRouteResult("GetPubloshing", new { id = publishingDTO.Id }, publishingDTO);
        }

        [HttpPut]
        public async Task<ActionResult> Put([FromBody] PublishingDTO publishingDTO)
        {
            if(publishingDTO == null)
                return BadRequest("Data invalid");
            await _publishingService.Update(publishingDTO);
            return Ok(publishingDTO);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<PublishingDTO>> Delete(int id)
        {
            var publishingDTO = await _publishingService.GetById(id);
            if(publishingDTO is null)
                return NotFound("Publishing not found!");
            return Ok(publishingDTO);
        }


    }
}
