import React from "react";
import configuracao from "../JSON/Configuracao";
import Video from "./Video";

const Usuario = () => {
  return (
    <>
      <div className='background-image bg-cover bg-no-repeat bg-center h-60'></div>
      <div className='flex items-center gap-2 h-28 py-4 px-8 dark:text-white bg-white dark:bg-slate-900'>
        <img
          className='h-full rounded-full'
          src={`https://github.com/${configuracao.github}.png`}
        />
        <div className='flex flex-col'>
          <h2 className="text-2xl font-bold">{configuracao.name}</h2>
          <p>{configuracao.job}</p>
        </div>
      </div>
      <Video />
    </>
  );
};

export default Usuario;
