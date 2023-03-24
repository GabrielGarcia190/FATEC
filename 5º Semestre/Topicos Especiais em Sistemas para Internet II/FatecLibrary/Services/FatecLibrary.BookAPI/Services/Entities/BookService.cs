using AutoMapper;
using FatecLibrary.BookAPI.DTO.Entities;
using FatecLibrary.BookAPI.Models.Entities;
using FatecLibrary.BookAPI.Repositories.Entities;
using FatecLibrary.BookAPI.Repositories.Interfaces;
using FatecLibrary.BookAPI.Services.Interfaces;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;

namespace FatecLibrary.BookAPI.Services.Entities
{
    public class BookService: IBookService
    {
        private readonly IBookRepository _bookRespoRepository;
        private readonly IMapper _mapper;

        public BookService(IBookRepository bookRespository, IMapper mapper)
        {
            _bookRespoRepository = bookRespository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<BookDTO>> GetAll()
        {
            var books = await _bookRespoRepository.GetAll(); 
            return _mapper.Map<IEnumerable<BookDTO>>(books);
        }

        public async Task<BookDTO> GetById(int id)
        {
            var book = await _bookRespoRepository.GetById(id);
            return _mapper.Map<BookDTO>(book);
        }

        public async Task Create(BookDTO bookDTO)
        {
            var book = _mapper.Map<Book>(bookDTO);
            await _bookRespoRepository.Create(book);
            bookDTO.Id = book.Id;
        }
        
        public async Task Update(BookDTO bookDTO)
        {
            var book = _mapper.Map<Book>(bookDTO);
            await _bookRespoRepository.Update(book);
        }

        public async Task Remove(int id)
        {
           await _bookRespoRepository.Delete(id);
        }
    }
}
