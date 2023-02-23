using FatecLibrary.BookAPI.Contexts;

namespace FatecLibrary.BookAPI.Repositories.Interfaces;

public class PublishingRepository : IPublishingRepository
{

    //o que os repositorios fazem?
    //Fazem o acesso dos métodos ao banco de dados
    private readonly AppDBContext _dbContext;

        public PublishingRepository(AppDBContext dBContext)
    {
        _dbContext = dBContext;
    }
}
