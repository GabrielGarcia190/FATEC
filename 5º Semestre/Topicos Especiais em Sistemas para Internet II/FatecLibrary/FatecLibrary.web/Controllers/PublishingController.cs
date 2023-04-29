using FatecLibrary.Web.Models.Entities;
using FatecLibrary.Web.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FatecLibrary.Web.Controllers;
public class PublishingController : Controller
{

    private readonly IPublisingService _publisingService;

    public PublishingController(IPublisingService publisingService)
    {
        _publisingService = publisingService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<PublishingViewModel>>> Index()
    {
        var result = await _publisingService.GetAllPublishers();
        if(result is null)
            return View("Error");
        return View(result);
    }

    // Criar a view CreatePublishing
    [HttpGet]
    public async Task<IActionResult> CreatePublishing()
    {
        return View();
    }


    [HttpPost]
    public async Task<IActionResult> CreatePublishing(PublishingViewModel publishingViewModel)
    {
        if(ModelState.IsValid)
        {
            var result = await _publisingService.CreatePublishing(publishingViewModel);

            if(result is not null)
                return RedirectToAction(nameof(Index));
        }
        else
            return BadRequest("Error");

        return View(publishingViewModel);
    }

    // Criar a view UpdatePublishing
    [HttpGet]
    public async Task<IActionResult> UpdatePublishing(int id)
    {
        var result = await _publisingService.FindPublishingById(id);
        if(result is null)
            return View("Error");
        return View(result);
    }

    [HttpPost]
    public async Task<IActionResult> UpdatePublishing(PublishingViewModel publishingViewModel)
    {
        if(ModelState.IsValid)
        {
            var result = await _publisingService.UpdatePublishing(publishingViewModel);
            if(result is not null)
                return RedirectToAction(nameof(Index));
        }

        return View(publishingViewModel);
    }

    // criar a view DeletePublishing
    [HttpGet]
    public async Task<ActionResult<PublishingViewModel>> DeletePublishing(int id)
    {
        var result = await _publisingService.FindPublishingById(id);
        if(result is null)
            return View("Error");
        return View(result);
    }

    // nesse caso os dois precisariam ter o msm nome, só que como não pode ter 
    // duas assinaturas de métodos iguais, foi nomeado como DeleteConfirmed
    // porém é necessário chamar uma ação DeleteProduct
    // por isso tem o ActionName
    [HttpPost(), ActionName("DeletePublishing")]
    public async Task<IActionResult> DeleteConfirmed(int id)
    {
        var result = await _publisingService.DeletePublishingById(id);
        if(!result)
            return View("Error");
        return RedirectToAction("Index");
    }
}
