import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

export function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const offset = currentPage * perPage;
  const pageCount = Math.ceil(searchResults.length / perPage);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  function handlePerPageChange(event) {
    setPerPage(parseInt(event.target.value));
    setCurrentPage(0);
  }

  async function searchBooks() {
    if (!searchTerm) {
      setSearchResults([]);
      alert("Digite um termo para buscar um livro");
    } else {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
      const data = await response.json();
      console.log(data);
      setSearchResults(data.items.map(item => ({
        id: item.id,
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors,
        thumbnail: item.volumeInfo.imageLinks?.thumbnail,
      })));
      setCurrentPage(0);
    }
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Pesquisar Livros</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="border border-gray-400 rounded-l px-4 py-2 w-full"
          placeholder="Digite o titulo ou genêro para buscar um livro"
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
        />
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold rounded-r px-4 py-2"
          onClick={() => searchBooks()}
        >
          Buscar
        </button>
      </div>
      <div className="flex mb-4 items-center">
        <label className="mr-4">Itens por página:</label>
        <select className="border border-gray-400 rounded px-4 py-2" value={perPage} onChange={handlePerPageChange}>
          <option value="2">2</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {searchResults.slice(offset, offset + perPage).map(book => (
          <div key={book.id} className="border border-gray-400 rounded overflow-hidden">
            <img src={book.thumbnail} alt={book.title} className="w-full h-48 object-cover" />
            <div className="px-4 py-2">
              <h3 className="font-bold text-xl mb-2">{book.title}</h3>
              <p className="text-gray-700">{book.author}</p>
            </div>
          </div>
        ))}
      </div>
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={'pagination flex justify-center mt-4'}
        activeClassName={'bg-red-500 text-white px-4 py-2 rounded-full'}
        previousClassName={'border border-gray-400 px-4 py-2 mr-2 rounded-full'}
        nextClassName={'border border-gray-400 px-4 py-2 ml-2 rounded-full'}
        pageClassName={'border border-gray-400 px-4 py-2 mr-2 rounded-full'}
        activeLinkClassName={'bg-red-500 text-white'}
        previousLabel={'Anterior'}
        nextLabel={'Proximo'}
      />
    </div>
  );
}


