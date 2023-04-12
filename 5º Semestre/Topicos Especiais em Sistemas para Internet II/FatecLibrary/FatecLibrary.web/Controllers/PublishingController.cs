using FatecLibrary.web.Models.Entities;
using FatecLibrary.web.Services.Interface;
using Microsoft.AspNetCore.Mvc;

namespace FatecLibrary.web.Controllers
{
    public class PublishingController : Controller
    {
        private readonly IPublishingService _publishingService;

        public PublishingController(IPublishingService publishingService)
        {
            _publishingService = publishingService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<PublishingViewModel>>> Index()
        {
            var result = await _publishingService.GetAllPublishers();
            if(result is null)
                return View("Error");
            return View(result);
        }

        //Criar a view CreatePublishing
        public async Task<IActionResult> CreatePublishing()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> CreatePublishing(PublishingViewModel publishingViewModel)
        {
            if(ModelState.IsValid)
            {
                var result = await _publishingService.CreatePublishing(publishingViewModel);
                if(result is not null)
                { 
                    return RedirectToAction(nameof(Index));
                }
                else
                {
                    return BadRequest("Error");
                }
                return View(publishingViewModel);
            }
        }
    }
}
