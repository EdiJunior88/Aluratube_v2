import { useEffect, useState } from "react";
import { AirtableGET } from "../API/AirtableGET";
import Busca from "./Busca";

const Video = () => {
  const [videos, setVideos] = useState([]);
  const [buscaTitulo, setBuscaTitulo] = useState("");

  //Espera pela resposta da API
  //Caso dê algum erro aparece um alert (popup) na página
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const resposta = await AirtableGET();
        setVideos(resposta);
      } catch (erro) {
        alert("Erro ao obter vídeos, tente novamente mais tarde");
      }
    };
    fetchVideos();
  }, []);

  //Função para obter a thumbnail do vídeo
  const thumbnailVideo = (url) => {
    const videoId = url.split("v=")[1];
    return `https://img.youtube.com/vi/${videoId}/0.jpg`;
  };

  return (
    <div className='max-h-max dark:bg-slate-950'>
      <div className='px-8 py-4 bg-slate-50 dark:bg-slate-950 dark:text-white'>
        <Busca filtro={(buscaTitulo) => setBuscaTitulo(buscaTitulo)} />
        <h2 className='w-full pb-4 font-bold'>Geral</h2>
        <div className='flex flex-wrap items-start gap-4 mx-14'>
          {/* filtrar vídeos pelo campo de busca */}
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
                    width='200'
                    height='150'
                    loading='lazy'
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
