using AutoMapper;
using FatecLibrary.BookAPI.DTO.Entities;
using FatecLibrary.BookAPI.Repositories.Interfaces;

namespace FatecLibrary.BookAPI.Services.Entities
{
    public class PublishingService : IPublishingService
    {
        // O que os serviços fazem?
        // eles fazem as chamadas dos métodos que realizarão as operações
        // no banco de dados, pi seja, os repositorios

        private readonly IPublishingRepository _publishingRepository;
        private readonly IMapper _mapper;

        public PublishingService(IPublishingRepository publishingRepository, IMapper mapper)
        {
            _publishingRepository = publishingRepository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<PublishingDTO>> GetAll()
        {
            var publishers = await _publishingRepository.GetAll();
            return _mapper.Map<IEnumerable<PublishingDTO>>(publishers);
        }

        public async Task<IEnumerable<PublishingDTO>> GetPublishersBooks()
        {
            var publisher = await _publishingRepository.GetPublishersBooks();
            return _mapper.Map<IEnumerable<PublishingDTO>>(publisher);
        }

        public async Task<PublishingDTO> GetById(int id)
        {
            var publishing = await _publishingRepository.GetById(id);
            return _mapper.Map<PublishingDTO>(publishing);
        }
    }
}
