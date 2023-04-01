import React, { useEffect, useState } from "react";
import {
  Typography,
  Alert,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import Modal from 'react-modal';


export function Notifications() {
  const [livros, setLivros] = useState([]);
  const [mostrarPrazoPagamento, setMostrarPrazoPagamento] = useState(false);
  const [livroSelecionado, setLivroSelecionado] = useState(null);
  const [prazoPagamento, setPrazoPagamento] = useState('');
  const [unidadePrazoPagamento, setUnidadePrazoPagamento] = useState("dias");
  const [juros, setJuros] = useState(0);


  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=9'
      );
      const data = await response.json();
      setLivros(data.items);
    }
    fetchData();
  }, []);

  function comprarLivro(livro) {
    setLivroSelecionado(livro);
    setMostrarPrazoPagamento(true);
  }

  function fecharModal() {
    setMostrarPrazoPagamento(false);
    setLivroSelecionado(null);
    setPrazoPagamento('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Prazo de pagamento: ', prazoPagamento);
    fecharModal();
  }

  function mostrar(){
    console.log(prazoPagamento, unidadePrazoPagamento);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Catálogo de Livros</h1>
      <div className="flex flex-wrap justify-center items-center">
        {livros.map((livro) => (

          <div
            key={livro.id}
            className="bg-white p-4 rounded border border-gray-300 m-2 cursor-pointer"
            onClick={() => comprarLivro(livro)}
          >
            <img
              src={livro.volumeInfo.imageLinks.thumbnail}
              alt={livro.volumeInfo.title}
              className="mb-2 w-48 h-48"
            />
            <h2 className="text-lg font-bold mb-2">{livro.volumeInfo.title}</h2>
            <p className="text-gray-600 mb-2">{livro.volumeInfo.authors[0]}</p>
            <p className="text-xl font-bold text-green-500">
              {livro.saleInfo.listPrice ? `R$ ${livro.saleInfo.listPrice.amount}` : 'Preço indisponível'}
            </p>
          </div>
        ))}
      </div>
      <Modal isOpen={mostrarPrazoPagamento} onRequestClose={fecharModal} className="w-1/3 mx-auto - ">
      <div className="bg-white p-4 rounded">
          <h2 className="text-xl font-bold mb-2">Comprar Livro</h2>
          <h3 className="text-lg font-semibold mb-2">
            {livroSelecionado?.volumeInfo.title}
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="prazoPagamento"
                className="block text-gray-700 font-bold mb-2"
              >
                Prazo para pagamento:
              </label>
              <div className="flex items-center mb-2">
                <input
                  type="text"
                  id="prazoPagamento"
                  name="prazoPagamento"
                  value={prazoPagamento}
                  onChange={(e) => setPrazoPagamento(e.target.value)}
                  className="border border-gray-300 p-2 w-full"
                />
                <select
                  value={unidadePrazoPagamento}
                  onChange={(e) => setUnidadePrazoPagamento(e.target.value)}
                  className="bg-gray-200 p-2 ml-2"
                >
                  <option value="dias">dias</option>
                  <option value="meses">meses</option>
                </select>
              </div>
                <p>Valor à pagar:R$ {livroSelecionado?.saleInfo.listPrice.amount}</p>
            </div>
            <div className="flex justify-end">
              <button
              onClick={mostrar}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Calcular juros
              </button>
              
              <button
                type="button"
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
                onClick={fecharModal}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default Notifications;
