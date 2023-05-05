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
    <div className='relative'>
      <button
        className='bg-red-500 h-14 w-14 rounded-full fixed bottom-3.5 right-3.5 transition hover:opacity-75'
        onClick={modalAberto}>
        <span className='text-white text-3xl font-bold leading-[0.7]'>+</span>
      </button>

      <Modal
        isOpen={modal}
        onRequestClose={modalFechado}
        ariaHideApp={false}
        className='absolute w-full -translate-x-1/2 -translate-y-1/2 h-2/4 sm:w-2/6 sm:h-3/6 top-1/2 left-1/2 bg-emerald-500 dark:bg-black dark:text-white'>
        <div>
          <button
            onClick={modalFechado}
            className='flex justify-end w-full py-3 pr-6'>
            x
          </button>
        </div>
        <form onSubmit={handleSubmit(enviar)}>
          <div className='flex flex-col items-center w-full h-52'>
            <div className='flex flex-col w-48 h-auto gap-4 text-xs sm:text-base'>
              <input
                className='w-full border border-gray-300 rounded'
                type='text'
                placeholder='nome'
                value={tituloVideo}
                {...register("titulo", { required: "Titulo é obrigatório" })}
                onChange={(evento) => setTituloVideo(evento.target.value)}
              />
              {errors.titulo && <p>{errors.titulo.message}</p>}

              <input
                className='w-full border border-gray-300 rounded'
                type='url'
                placeholder='url'
                value={urlVideo}
                {...register("url", { required: "URL é obrigatório" })}
                onChange={(evento) => setUrlVideo(evento.target.value)}
              />
              {/* Mensagem de erro */}
              {errors.url && <p>{errors.url.message}</p>}

              <button type='submit' className='w-full bg-red-600 rounded'>
                Enviar
              </button>

              {/* Mensagem de sucesso */}
              {mensagemAdicaoCorreta && (
                <p className='text-center dark:text-white text-slate-950'>
                  {mensagemAdicaoCorreta}
                </p>
              )}

              {/* Mensagem de erro */}
              {errors.submit && (
                <p className='text-center dark:text-white text-slate-950'>
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
