import React, { useEffect, useState } from "react";
import { AirtableGET } from "../API/AirtableGET";
import Busca from "./Busca";

const Video = () => {
  const [videos, setVideos] = useState([]);
  const [buscaTitulo, setBuscaTitulo] = useState("");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const resposta = await AirtableGET();
        setVideos(resposta);
      } catch (erro) {
        console.log("Erro ao obter vídeos:", erro);
      }
    };
    fetchVideos();
  }, [videos]);

  const thumbnailVideo = (url) => {
    const videoId = url.split("v=")[1];
    return `https://img.youtube.com/vi/${videoId}/0.jpg`;
  };

  return (
    <div>
      <div className='px-8 py-4 bg-slate-50 dark:bg-slate-950 dark:text-white'>
        <Busca onSearch={(buscaTitulo) => setBuscaTitulo(buscaTitulo)} />
        <h2 className='w-full pb-4 font-bold'>Geral</h2>
        <div className='flex flex-wrap gap-4'>
          {videos
            .filter((video) =>
              video.fields.title
                .toLowerCase()
                .includes(buscaTitulo.toLowerCase())
            )
            .map((video) => (
              <div
                className='max-w-[200px] transition hover:opacity-75'
                key={video.id}>
                <a href={video.fields.url} target='_blank' rel='noreferrer'>
                  <img
                    className='object-cover w-full h-auto aspect-video'
                    src={thumbnailVideo(video.fields.url)}
                    alt={video.fields.Title}
                    title='Clique para assistir'
                  />
                  <p className='py-2'>{video.fields.title}</p>
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Video;
