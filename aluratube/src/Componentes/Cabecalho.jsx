import React, { useEffect, useState } from "react";
import { ReactComponent as LogoYoutube } from "../Imagens/youtube-logo.svg";
import { ReactComponent as AluraTube } from "../Imagens/Aluratube-logo.svg";

const Cabecalho = () => {
  const [temaEscuro, setTemaEscuro] = useState(false);

  const mudarTema = (ligado) => {
    setTemaEscuro(ligado);
  };

  // Adiciona classe dark no body
  // caso o tema escuro seja ligado
  useEffect(() => {
    const root = document.documentElement;

    if (temaEscuro) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [temaEscuro]);

  const corLogo = !temaEscuro ? "#020617" : "#fff";

  return (
    <div>
      <div className='flex justify-between items-center fixed w-full px-4 bg-white dark:bg-slate-900'>
        <div className='flex items-center h-14'>
          <LogoYoutube width='46' height='46' />
          <AluraTube width='100' height='50' fill={corLogo} />
        </div>
        <button
          className='bg-blue-500 text-white p-2 rounded'
          onClick={() => mudarTema(!temaEscuro)}>
          {!temaEscuro ? "Claro" : "Escuro"}
        </button>
      </div>
    </div>
  );
};

export default Cabecalho;
