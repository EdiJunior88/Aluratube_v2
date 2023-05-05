import React, { useState } from "react";

const Busca = ({ onSearch }) => {
  const [buscaPalavra, setBuscaPalavra] = useState("");

  //Busca a palavra pressionando a tecla Enter
  const buscaEnter = (evento) => {
    if (evento.key === "Enter") {
      onSearch(buscaPalavra);
    }
  };

  //Busca a palavra clicando na lupa
  const buscaClique = () => {
    onSearch(buscaPalavra);
  };

  //Reseta o campo de busca
  const resetar = () => {
    onSearch("");
    setBuscaPalavra("");
  };

  return (
    <div className='fixed top-2 left-0 right-0 flex items-center justify-center w-2/6 mx-auto z-0'>
      <input
        type='text'
        placeholder='Buscar vídeos...'
        value={buscaPalavra}
        onChange={(event) => setBuscaPalavra(event.target.value)}
        onKeyDown={buscaEnter}
        className='p-2 border border-gray-300 dark:border-slate-700 rounded w-full dark:bg-slate-950'
      />
      <button className='py-2 px-4' onClick={buscaClique}>
        🔎
      </button>
      <button className='py-2 px-4' onClick={resetar}>
        ❌
      </button>
    </div>
  );
};

export default Busca;
