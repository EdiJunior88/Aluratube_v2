import React, { useState } from "react";
import { AirtablePOST } from "../API/AirtablePOST";

const Formulario = () => {
  const [tituloVideo, setTituloVideo] = useState("");
  const [urlVideo, setUrlVideo] = useState("");

  const enviar = async (evento) => {
    evento.preventDefault();

    const dataAtual = new Date().toISOString();

    const data = {
      title: tituloVideo,
      url: urlVideo,
      created_date: dataAtual,
    };

    const resultado = await AirtablePOST(data);
    if (resultado) {
      console.log("DEU CERTO", data);
    } else {
      console.log("deu errado", data);
    }
  };

  return (
    <form onSubmit={enviar}>
      <input
        type='text'
        placeholder='nome'
        value={tituloVideo}
        onChange={(evento) => setTituloVideo(evento.target.value)}
      />
      <input
        type='text'
        placeholder='url'
        value={urlVideo}
        onChange={(evento) => setUrlVideo(evento.target.value)}
      />
      <button type='submit'>Enviar</button>
    </form>
  );
};

export default Formulario;
