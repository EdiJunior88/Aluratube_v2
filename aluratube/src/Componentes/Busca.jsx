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
    <div className='fixed left-0 right-0 flex flex-col sm:flex-row items-center justify-center mx-auto sm:flex top-14 sm:top-1.5 sm:w-5/12 z-20'>
      <input
        type='text'
        placeholder='Buscar vídeos...'
        value={buscaPalavra}
        onChange={(event) => setBuscaPalavra(event.target.value)}
        onKeyDown={buscaEnter}
        className='w-11/12 py-2 pl-2 border border-gray-300 rounded sm:pl-2 sm:w-full sm:px-0 dark:border-slate-700 dark:bg-slate-950'
      />
      <div className='flex items-center justify-center w-full gap-16 pt-2 sm:gap-4 sm:pt-0 sm:pl-4 sm:w-20'>
        <button onClick={buscaClique}>🔎</button>
        <button onClick={resetar}>❌</button>
      </div>
    </div>
  );
};

export default Busca;
