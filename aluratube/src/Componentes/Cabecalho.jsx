import React from "react";
import { ReactComponent as LogoYoutube } from "../Imagens/youtube-logo.svg";
import { ReactComponent as AluraTube } from "../Imagens/Aluratube-logo.svg";

const Cabecalho = () => {
  return (
    <div className='fixed w-full px-4 bg-slate-950'>
      <div className='flex items-center h-14'>
        <LogoYoutube width='46' height='46'/>
        <AluraTube width='100' height='50' fill="white" />
      </div>
    </div>
  );
};

export default Cabecalho;
