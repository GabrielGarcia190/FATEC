using FatecLibrary.BookAPI.Context;
using FatecLibrary.BookAPI.Repositories.Entities;
using FatecLibrary.BookAPI.Repositories.Interfaces;
using FatecLibrary.BookAPI.Services.Entities;
using FatecLibrary.BookAPI.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//pegando a string de conexão
var mySqlConnection = builder
    .Configuration.GetConnectionString("DefaultConnection");

//usar para que o Entity Framework
//crie nossas tebelas no banco de dados
builder.Services.AddDbContext<AppDBContext>(options =>
        options.UseNpgsql(mySqlConnection)
);

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

//criando injeção de dependência
builder.Services.AddScoped<IPublishingRepository, PublishingRepository>();
builder.Services.AddScoped<IBookRepository, BookRepository>();
builder.Services.AddScoped<IPublishingService, PublishingService>();
builder.Services.AddScoped<IBookService, BookService>();






var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
