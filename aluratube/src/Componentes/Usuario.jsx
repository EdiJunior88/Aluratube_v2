import React from "react";
import configuracao from "../JSON/Configuracao";
import Video from "./Video";

const Usuario = () => {
  return (
    <>
      <div className='block pt-32 bg-white bg-center bg-no-repeat bg-cover sm:p-0 sm:bg-[url("Imagens/banner.jpg")] dark:bg-slate-900 sm:h-60'></div>
      <div className='flex items-center gap-2 px-8 py-4 bg-white h-28 dark:text-white dark:bg-slate-900'>
        <img
          className='h-full rounded-full'
          src={`https://github.com/${configuracao.github}.png`}
        />
        <div className='flex flex-col'>
          <h2 className='text-xl font-bold sm:text-2xl'>{configuracao.name}</h2>
          <p className='text-xs sm:text-base'>{configuracao.job}</p>
        </div>
      </div>

      {/* Componente Vídeo */}
      <Video />
    </>
  );
};

export default Usuario;
