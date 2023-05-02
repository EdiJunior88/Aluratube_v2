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

  const thumbnailVideo = (url) => {
    const videoId = url.split("v=")[1];
    return `https://img.youtube.com/vi/${videoId}/0.jpg`;
  };

  return (
    <div>
      {videos.map((video) => (
        <div key={video.id}>
          {/* <ReactPlayer url={video.fields.url} /> */}
          <p>{video.fields.title}</p>
          <a href={video.fields.url} target='_blank' rel='noreferrer'>
            <img
              src={thumbnailVideo(video.fields.url)}
              alt={video.fields.Title}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Video;
