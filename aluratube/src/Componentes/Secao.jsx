import React from "react";
import configuracao from "../JSON/Configuracao";

const Secao = () => {
  return (
    <div>
      <div className='background-image bg-cover bg-no-repeat bg-center h-44'></div>

      <div className='flex items-center h-28 py-4 px-8 bg-red-400'>
        <img
          className='h-full'
          src={`https://github.com/${configuracao.github}.png`}
        />
        <div className='flex flex-col'>
          <p>{configuracao.name}</p>
          <p>{configuracao.job}</p>
        </div>
      </div>
    </div>
  );
};

export default Secao;
