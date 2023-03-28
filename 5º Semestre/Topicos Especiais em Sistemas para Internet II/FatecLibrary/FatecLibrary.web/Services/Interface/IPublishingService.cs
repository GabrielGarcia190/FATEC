using FatecLibrary.web.Models.Entities;

namespace FatecLibrary.web.Services.Interface
{
    public interface IPublishingService
    {
        Task<IEnumerable<PublishingViewModel>> GetAllPublishers();
        Task<PublishingViewModel> FindPublishingById(int id);
        Task<PublishingViewModel> CreatePublishing(PublishingViewModel publishing);
        Task<PublishingViewModel> UpdatePublishing(PublishingViewModel publishing);
        Task<bool> DeletePublishingById(int id);
    }
}
