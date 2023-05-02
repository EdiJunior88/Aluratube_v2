import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { AirtableGET } from "../API/AirtableGET";

const Video = () => {
  const [videos, setVideos] = useState([]);

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

  return (
    <div>
      {videos.map((video) => (
        <ReactPlayer key={video.id} url={video.fields.url} controls />
      ))}
    </div>
  );
};

export default Video;
