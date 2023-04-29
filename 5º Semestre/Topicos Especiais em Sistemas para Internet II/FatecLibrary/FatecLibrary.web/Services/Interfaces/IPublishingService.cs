using FatecLibrary.Web.Models.Entities;

namespace FatecLibrary.Web.Services.Interfaces;
public interface IPublisingService
{
    Task<IEnumerable<PublishingViewModel>> GetAllPublishers();
    Task<PublishingViewModel> FindPublishingById(int id);
    Task<PublishingViewModel> CreatePublishing(PublishingViewModel publishingVM);
    Task<PublishingViewModel> UpdatePublishing(PublishingViewModel publishingVM);
    Task<bool> DeletePublishingById(int id);
}
