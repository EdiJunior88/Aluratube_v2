import React, { useState } from "react";
import { AirtablePOST } from "../API/AirtablePOST";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

const Formulario = () => {
  const [tituloVideo, setTituloVideo] = useState("");
  const [urlVideo, setUrlVideo] = useState("");
  const [modal, setModal] = useState(false);
  const [mensagemAdicaoCorreta, setMensagemAdicaoCorreta] = useState("");

  //Constantes do React Hook Forms
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
        console.log("comunicação aceita com a API");
      } else {
        console.log("comunicação recusada com a API");
      }
    } catch (erro) {
      //mensagem de erro
      setErro("submit", { message: "Erro ao adicionar o vídeo" });
    }
  };

  return (
    <div className='relative'>
      <button
        className='bg-red-500 h-10 w-10 sm:h-14 sm:w-14 rounded-full fixed bottom-3.5 right-3.5 transition hover:opacity-90 sm:hover:opacity-75'
        onClick={modalAberto}>
        <span className='text-white sm:text-3xl text-2xl sm:font-bold leading-[0.8] sm:leading-[0.7]'>
          +
        </span>
      </button>

      {/* Modal "janela" para apresentar o formulário de envio do vídeo (título + url) */}
      <Modal
        isOpen={modal}
        onRequestClose={modalFechado}
        ariaHideApp={false}
        className='absolute w-full -translate-x-1/2 -translate-y-1/2 bg-white h-2/5 sm:h-4/6 sm:w-2/6 top-[450px] sm:top-1/2 left-1/2 dark:bg-slate-900 dark:text-white'>
        <div>
          <button
            onClick={modalFechado}
            className='flex justify-end w-full pt-2 pb-4 pr-6 text-xl font-semibold sm:pt-3 dark:text-white'>
            x
          </button>
        </div>
        <form onSubmit={handleSubmit(enviar)}>
          <div className='flex flex-col items-center w-full h-52'>
            <div className='flex flex-col w-3/4 h-auto gap-4 text-xs xl:w-2/3 sm:gap-4 sm:text-base'>
              <input
                className='w-full py-3 pl-2 text-xs text-black border border-gray-300 rounded sm:py-1 placeholder:text-xs'
                type='text'
                placeholder='Título do vídeo'
                value={tituloVideo}
                {...register("titulo", { required: "Titulo é obrigatório" })}
                onChange={(evento) => setTituloVideo(evento.target.value)}
              />
              {errors.titulo && (
                <p className='text-xs dark:text-white text-slate-950'>
                  {errors.titulo.message}
                </p>
              )}

              <input
                className='w-full py-3 pl-2 text-xs text-black border border-gray-300 rounded sm:py-1 placeholder:text-xs'
                type='url'
                placeholder='URL'
                value={urlVideo}
                {...register("url", { required: "URL é obrigatório" })}
                onChange={(evento) => setUrlVideo(evento.target.value)}
              />

              {/* Mensagem de erro */}
              {errors.url && (
                <p className='text-xs dark:text-white text-slate-950'>
                  {errors.url.message}
                </p>
              )}

              <button
                type='submit'
                className='w-full py-3 font-bold text-white bg-red-600 rounded sm:py-2'>
                Enviar
              </button>

              {/* Mensagem de sucesso */}
              {mensagemAdicaoCorreta && (
                <p className='text-xs text-center dark:text-white text-slate-950'>
                  {mensagemAdicaoCorreta}
                </p>
              )}

              {/* Mensagem de erro */}
              {errors.submit && (
                <p className='text-xs text-center dark:text-white text-slate-950'>
                  {errors.submit.message}
                </p>
              )}
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Formulario;
