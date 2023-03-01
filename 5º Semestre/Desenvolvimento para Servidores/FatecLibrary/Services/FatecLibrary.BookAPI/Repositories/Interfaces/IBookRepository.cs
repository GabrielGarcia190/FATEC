using FatecLibrary.BookAPI.Models.Entities;

namespace FatecLibrary.BookAPI.Repositories.Interfaces
{
    public interface IBookRepository
    {
        Task<IEnumerable<Book>> GetAll();
        Task<IEnumerable<Book>> GetById(int id);
        Task<IEnumerable<Book>> Create(Book book);
        Task<IEnumerable<Book>> Update(Book book);
        Task<IEnumerable<Book>> Delete(int id);
    }
}
