using FatecLibrary.BookAPI.Contexts;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//pegando a string de conex�o
var mySqlConnection = builder
    .Configuration.GetConnectionString("DefaultConnection");

//usar para que o Entity Framework
//crie nossas tebelas no banco de dados
builder.Services.AddDbContext<AppDBContext>(options =>
        options.UseNpgsql(mySqlConnection)
);

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());


var app = builder.Build();

// Configure the HTTP request pipeline.
if(app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
