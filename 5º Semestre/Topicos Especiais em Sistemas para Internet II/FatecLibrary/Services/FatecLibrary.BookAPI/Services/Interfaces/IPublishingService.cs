using FatecLibrary.BookAPI.DTO.Entities;

namespace FatecLibrary.BookAPI.Services.Interfaces
{
    public class IPublishingService
    {
        public interface IPublishing
        {
            Task<IEnumerable<PublishingDTO>> GetAll();
            Task<IEnumerable<PublishingDTO>> GetPublishersBooks();
            Task<PublishingDTO> GetById(int id);
            Task Create(PublishingDTO publishingDTO);
            Task Update(PublishingDTO publishingDTO);
            Task Remove(int id);
        }
    }
}
