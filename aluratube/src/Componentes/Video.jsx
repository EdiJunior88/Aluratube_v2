import React, { useEffect, useState } from "react";
import { AirtableGET } from "../API/AirtableGET";

const Video = () => {
  const [videos, setVideos] = useState([]);

  //espera pela resposta da API
  //se der certo, atualiza o estado
  //e o useEffect é executado uma ÚNICA VEZ, quando o componente é renderizado
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

  //adiciona uma Thumbnail do vídeo através do seu ID
  const thumbnailVideo = (url) => {
    const videoId = url.split("v=")[1];
    return `https://img.youtube.com/vi/${videoId}/0.jpg`;
  };

  return (
    <div className="py-4 px-8 bg-slate-50 dark:bg-slate-950 dark:text-white">
      <h2 className="w-full pb-4 font-bold">Geral</h2>
      <div className='flex gap-4'>
        {videos.map((video) => (
          <div className="max-w-[210px] transition hover:opacity-75" key={video.id}>
            <a href={video.fields.url} target='_blank' rel='noreferrer'>
              <img
                className='w-full h-auto object-cover	aspect-video'
                src={thumbnailVideo(video.fields.url)}
                alt={video.fields.Title}
                title='Clique para assistir'
              />
            <p className="py-2">{video.fields.title}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
