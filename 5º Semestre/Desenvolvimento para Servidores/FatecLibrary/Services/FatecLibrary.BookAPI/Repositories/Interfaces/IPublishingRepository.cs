using FatecLibrary.BookAPI.Models.Entities;

namespace FatecLibrary.BookAPI.Repositories.Interfaces;

public interface IPublishingRepository
{
    Task<IEnumerable<Publishing>> GetAll();
    Task<IEnumerable<Publishing>> GetPublisherBook();
    Task<Publishing> GetById(int id);
    Task<Publishing> Create(Book book);
    Task<Publishing> Update(Book book);
    Task<Publishing> Delete(int id);
}
