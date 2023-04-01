using FatecLibrary.web.Models.Entities;
using FatecLibrary.web.Services.Interface;
using System.Text;
using System.Text.Json;

namespace FatecLibrary.web.Services.Entities
{
    public class PublishingService : IPublishingService
    {
        private readonly IHttpClientFactory _clientFactory;
        private readonly JsonSerializerOptions _options;
        private const string apiEndpoint = "/api/pulishing/";
        private PublishingViewModel _publishingViewModel;
        private IEnumerable<PublishingViewModel> publishers;

        public PublishingService(IHttpClientFactory clienteFactory)
        {
            _clientFactory = clienteFactory;
            _options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
        }

        public async Task<IEnumerable<PublishingViewModel>> GetAllPublishers()
        {
            var client = _clientFactory.CreateClient("BookAPI");

            var response = await client.GetAsync(apiEndpoint);
            if(response.IsSuccessStatusCode)
            {
                var apiResponse = await response.Content.ReadAsStreamAsync();
                publishers = await JsonSerializer
                    .DeserializeAsync<IEnumerable<PublishingViewModel>>(apiResponse, _options);
            }
            else
                return null;

            return publishers;
        }

        public async Task<PublishingViewModel> FindPublishingById(int id)
        {
            var client = _clientFactory.CreateClient("BookAPI");

            using(var reponse = await client.GetAsync(apiEndpoint + id))
            {
                if(reponse.IsSuccessStatusCode && reponse.Content is not null)
                {
                    var apiResponse = await reponse.Content.ReadAsStreamAsync();
                    _publishingViewModel = await JsonSerializer
                        .DeserializeAsync<PublishingViewModel>(apiResponse, _options);
                }
                else
                    return null;
            }
            return _publishingViewModel;
        }

        public async Task<PublishingViewModel> CreatePublishing(PublishingViewModel publishingVM)
        {
            var client = _clientFactory.CreateClient("BookAPI");

            StringContent content = new StringContent(JsonSerializer.Serialize(publishingVM),
                Encoding.UTF8, "application/json");

            using(var response = await client.PostAsync(apiEndpoint, content))
            {
                if(response.IsSuccessStatusCode)
                {
                    var apiResponse = await response.Content.ReadAsStreamAsync();
                    _publishingViewModel = await JsonSerializer
                        .DeserializeAsync<PublishingViewModel>(apiResponse, _options);
                }
                else
                    return null;
            }
            return _publishingViewModel;
        }

        public async Task<PublishingViewModel>UpdatePublishing(PublishingViewModel publishingVW)
        {
            var client = _clientFactory.CreateClient("BookAPI");

            PublishingViewModel publishingUpdate = new PublishingViewModel();

            using(var response = await client.PutAsJsonAsync(apiEndpoint, publishingVW))
            {
                if(response.IsSuccessStatusCode)
                {
                    var apiReponse = await response.Content.ReadAsStreamAsync();
                    publishingUpdate = await JsonSerializer
                        .DeserializeAsync<PublishingViewModel>(apiReponse, _options);
                }
                else
                    return null;
            }
            return publishingUpdate;
        }

        public async Task<bool> DeletePublishingById(int id)
        {
            var client = _clientFactory.CreateClient("BookAPI");

            using (var response = await client.DeleteAsync(apiEndpoint + id))
            {
                if(reponse.IsSuccessStatusCode)
                    return true;
            }
            return false;
        }
    }
}
