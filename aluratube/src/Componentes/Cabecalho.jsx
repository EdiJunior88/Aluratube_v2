import React from "react";
import { ReactComponent as LogoYoutube } from "../Imagens/youtube-logo.svg";
import { ReactComponent as AluraTube } from "../Imagens/Aluratube-logo.svg";

const Cabecalho = () => {
  return (
    <>
      <div className='h-14 px-4 bg-blue-500'>
        <div className='flex items-center'>
          <LogoYoutube width='46' height='46' />
          <AluraTube width='100' height='50' />
        </div>
      </div>

      <div className="background-image bg-cover bg-no-repeat bg-center h-44"></div>
    </>
  );
};

export default Cabecalho;
