using FatecLibrary.web.Models.Entities;
using FatecLibrary.web.Services.Interface;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;



namespace FatecLibrary.web.Controllers;



public class BookController : Controller
{
    private readonly IBookService _bookService;
    private readonly IPublishingService _publishingService;

    public BookController(IBookService bookService, IPublishingService publishingService)
    {
        _bookService = bookService;
        _publishingService = publishingService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<BookViewModel>>> Index()
    {
        var result = await _bookService.GetAllBooks();
        if(result is null)
            return View("Error");
        return View(result);
    }

    [HttpGet]
    public async Task<IActionResult> CreateBook()
    {
        ViewBag.PublishingId = new SelectList(
        await _publishingService.GetAllPublishers(), "Id", "Name");
        return View();
    }

    [HttpPost]
    public async Task<IActionResult> CreateBook(BookViewModel bookViewModel)
    {
        if(ModelState.IsValid)
        {
            var result = await _bookService.CreateBook(bookViewModel);
            if(result != null)
                return RedirectToAction(nameof(Index));
        }
        else
        {
            ViewBag.PublishingId = new SelectList(
            await _publishingService.GetAllPublishers(), "Id", "Name");
            // return BadRequest("Erro");
        }
        return View(bookViewModel);
    }

    [HttpGet]
    public async Task<IActionResult> UpdateBook(int id)
    {
        ViewBag.PublishingId = new
        SelectList(await _publishingService.GetAllPublishers(), "Id", "Name");

        var result = await _bookService.FindBookById(id);

        if(result is null)
            return View("Error");
        return View(result);
    }



    [HttpPost]
    public async Task<IActionResult> UpdateBook(BookViewModel bookViewModel)
    {
        if(ModelState.IsValid)
        {
            var result = await _bookService.UpdateBook(bookViewModel);

            if(result is not null)
                return RedirectToAction(nameof(Index));
        }
        return View(bookViewModel);
    }



    [HttpGet]
    public async Task<ActionResult<BookViewModel>> DeleteBook(int id)
    {
        var result = await _bookService.FindBookById(id);

        if(result is null)
            return View("Error");

        return View(result);
    }

    [HttpPost(), ActionName("DeleteBook")]
    public async Task<IActionResult> DeleteConfirmed(int id)
    {
        var result = await _bookService.DeleteById(id);

        if(!result)
            return View("Error");

        return RedirectToAction("Index");
    }