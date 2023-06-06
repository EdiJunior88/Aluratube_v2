import { useEffect, useState } from "react";
import { ReactComponent as LogoYoutube } from "../Imagens/youtube-logo.svg";
import { ReactComponent as AluraTube } from "../Imagens/Aluratube-logo.svg";

const Cabecalho = () => {
  const [tema, setTema] = useState(false);

  // Função para mudar o tema
  const mudarTema = () => {
    setTema(!tema);
  };

  // Adiciona classe dark no body
  // caso o tema escuro seja ligado
  useEffect(() => {
    const root = document.documentElement;

    if (tema) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [tema]);

  // Cor do logo (Youtube) de acordo com a mudança do tema
  const corLogo = !tema ? "#020617" : "#fff";

  return (
    <div>
      <div className='fixed z-10 flex items-center justify-between w-full px-4 pb-24 bg-white sm:pb-0 sm:h-auto dark:bg-slate-900'>
        <div className='flex items-center h-14'>
          <LogoYoutube width='46' height='46' />
          <AluraTube width='100' height='50' fill={corLogo} />
        </div>

        {/* Botão "toggle" para mudar o tema */}
        <div className='relative inline-block w-12 align-middle select-none'>
          <input
            type='checkbox'
            className='hidden botao-checkbox'
            id='botao'
            name='botao'
            checked={tema}
            onChange={mudarTema}
          />
          <label
            htmlFor='botao'
            className={`${
              tema ? "" : "bg-slate-300"
            } block overflow-hidden h-6 rounded-full bg-slate-300 cursor-pointer`}>
            <span
              className={`${
                tema ? "translate-x-6 bg-slate-900" : "translate-x-0"
              } inline-block w-6 h-6 transform bg-white rounded-full transition-transform duration-200 ease-in`}>
              {!tema ? "☀️" : "🌙"}
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Cabecalho;
