using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace FatecLibrary.BookAPI.DTO.Entities
{
    public class BookDTO
    {
        public int id { get; set; }
        [Required(ErrorMessage = "The TItle is Required")]
        [MinLength(3)]
        [MaxLength(100)]
        public string? Title { get; set; }

        [Required(ErrorMessage = "The price is required!")]
        public decimal Price { get; set; }

        [Required(ErrorMessage = "The Publication  Year is required!")]
        public int PublicationYear { get; set; }

        [Required(ErrorMessage = "The Edition is required!")]
        public int Edition { get; set; }

        public string? ImageURl { get; set; }

        [JsonIgnore]
        public PublishingDTO? PublisngDTO { get; set; }
        public int PublishingId { get; set; }
        public string? PublishingName { get; set; }
    }
}
