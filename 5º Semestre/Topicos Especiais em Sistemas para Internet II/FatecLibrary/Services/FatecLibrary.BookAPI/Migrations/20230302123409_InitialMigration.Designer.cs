﻿// <auto-generated />
using FatecLibrary.BookAPI.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace FatecLibrary.BookAPI.Migrations
{
    [DbContext(typeof(AppDBContext))]
    [Migration("20230302123409_InitialMigration")]
    partial class InitialMigration
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.0-preview.1.23111.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("FatecLibrary.BookAPI.Models.Entities.Book", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("Edition")
                        .HasColumnType("integer");

                    b.Property<string>("ImageURL")
                        .HasMaxLength(255)
                        .HasColumnType("character varying(255)");

                    b.Property<decimal>("Price")
                        .HasPrecision(8, 2)
                        .HasColumnType("numeric(8,2)");

                    b.Property<int>("PublicationYear")
                        .HasColumnType("integer");

                    b.Property<int>("PublishingId")
                        .HasColumnType("integer");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("character varying(100)");

                    b.HasKey("Id");

                    b.HasIndex("PublishingId");

                    b.ToTable("Books");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Edition = 1,
                            ImageURL = "asas",
                            Price = 1m,
                            PublicationYear = 1,
                            PublishingId = 1,
                            Title = "Alta"
                        });
                });

            modelBuilder.Entity("FatecLibrary.BookAPI.Models.Entities.Publishing", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Acronym")
                        .HasMaxLength(10)
                        .HasColumnType("character varying(10)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("character varying(100)");

                    b.HasKey("Id");

                    b.ToTable("Publishers");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Acronym = "AB",
                            Name = "Alta Books"
                        },
                        new
                        {
                            Id = 2,
                            Acronym = "Fatec",
                            Name = "Editora Fatec"
                        });
                });

            modelBuilder.Entity("FatecLibrary.BookAPI.Models.Entities.Book", b =>
                {
                    b.HasOne("FatecLibrary.BookAPI.Models.Entities.Publishing", "Publishing")
                        .WithMany("Books")
                        .HasForeignKey("PublishingId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Publishing");
                });

            modelBuilder.Entity("FatecLibrary.BookAPI.Models.Entities.Publishing", b =>
                {
                    b.Navigation("Books");
                });
#pragma warning restore 612, 618
        }
    }
}
