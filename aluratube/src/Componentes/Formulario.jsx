import React, { useState } from "react";
import { AirtablePOST } from "../API/AirtablePOST";
import Modal from "react-modal";

const Formulario = () => {
  const [tituloVideo, setTituloVideo] = useState("");
  const [urlVideo, setUrlVideo] = useState("");
  const [modal, setModal] = useState(false);

  //verificar se o modal está aberto
  function modalAberto() {
    setModal(true);
  }

  //verificar se o modal está fechado
  function modalFechado() {
    setModal(false);
  }

  const enviar = async (evento) => {
    evento.preventDefault();

    //converte para uma data no formato ISO 8601 (YYYY-MM-DDTHH:mm:ss.sssZ)
    const dataAtual = new Date().toISOString();

    //os dados dos hooks estão atrelados aos fields do Airtable
    const data = {
      title: tituloVideo,
      url: urlVideo,
      created_date: dataAtual,
    };

    //limpa os campos do formulário
    setTituloVideo("");
    setUrlVideo("");

    //pausa e espera pelo retorno da Promisse do Airtable
    const resultado = await AirtablePOST(data);

    if (resultado) {
      console.log("DEU CERTO", data);
    } else {
      console.log("deu errado", data);
    }
  };

  return (
    <>
      <button onClick={modalAberto}>+</button>

      <Modal isOpen={modal} onRequestClose={modalFechado} ariaHideApp={false}>
        <div>
          <button onClick={modalFechado}>x</button>
        </div>
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
      </Modal>
    </>
  );
};

export default Formulario;
