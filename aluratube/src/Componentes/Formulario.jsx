import React, { useState } from "react";
import { AirtablePOST } from "../API/AirtablePOST";
import Modal from "react-modal";
import { useForm, useFormState } from "react-hook-form";

const Formulario = () => {
  const [tituloVideo, setTituloVideo] = useState("");
  const [urlVideo, setUrlVideo] = useState("");
  const [modal, setModal] = useState(false);
  const [mensagemAdicaoCorreta, setMensagemAdicaoCorreta] = useState("");

  const {
    register,
    handleSubmit,
    setErro,
    formState: { errors },
  } = useForm();

  //verificar se o modal está aberto
  function modalAberto() {
    setModal(true);
  }

  //verificar se o modal está fechado
  function modalFechado() {
    setModal(false);
  }

  const enviar = async () => {
    try {
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

      //mensagem de sucesso
      setMensagemAdicaoCorreta("Vídeo adicionado!");

      if (resultado) {
        console.log("DEU CERTO", data);
      } else {
        console.log("deu errado", data);
      }
    } catch (erro) {
      //mensagem de erro
      setErro("submit", { message: "Erro ao adicionar o vídeo" });
    }
  };

  return (
    <>
      <button onClick={modalAberto}>+</button>

      <Modal isOpen={modal} onRequestClose={modalFechado} ariaHideApp={false}>
        <div>
          <button onClick={modalFechado}>x</button>
        </div>
        <form onSubmit={handleSubmit(enviar)}>
          <input
            type='text'
            placeholder='nome'
            value={tituloVideo}
            {...register("titulo", { required: "Titulo é obrigatório" })}
            onChange={(evento) => setTituloVideo(evento.target.value)}
          />
          {errors.titulo && <p>{errors.titulo.message}</p>}

          <input
            type='url'
            placeholder='url'
            value={urlVideo}
            {...register("url", { required: "URL é obrigatório" })}
            onChange={(evento) => setUrlVideo(evento.target.value)}
          />
          {/* Mensagem de erro */}
          {errors.url && <p>{errors.url.message}</p>}

          <button type='submit'>Enviar</button>

          {/* Mensagem de sucesso */}
          {mensagemAdicaoCorreta && <p>{mensagemAdicaoCorreta}</p>}

          {/* Mensagem de erro */}
          {errors.submit && <p>{errors.submit.message}</p>}
        </form>
      </Modal>
    </>
  );
};

export default Formulario;
