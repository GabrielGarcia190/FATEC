using System.ComponentModel.DataAnnotations;

namespace FatecLibrary.BookAPI.DTO.Entities
{
    public class PublishingDTO
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "The Name is required!")]
        [MinLength(3)]
        [MaxLength(255)]

        public string? Name { get; set; }
        public string? Acronym { get; set; }

        public ICollection<BookDTO> BooksDTO { get; set; }
    }
}
