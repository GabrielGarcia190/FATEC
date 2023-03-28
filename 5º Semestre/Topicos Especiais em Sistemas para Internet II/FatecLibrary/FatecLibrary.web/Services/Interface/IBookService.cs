using FatecLibrary.web.Models.Entities;

namespace FatecLibrary.web.Services.Interface
{
    public interface IBookService
    {
        Task<IEnumerable<BookViewModel>> GetAllBooks();
        Task<BookViewModel> FindBookById(int id);
        Task<BookViewModel> CreateBook(BookViewModel bookVM);
        Task<BookViewModel> UpdateBook(BookViewModel bookVM);
        Task<bool> DeleteById(int id);

    }
}
