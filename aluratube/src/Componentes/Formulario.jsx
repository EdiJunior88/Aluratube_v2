import React, { useState } from "react";
import { AirtablePOST } from "../API/AirtablePOST";

const Formulario = () => {
  const [nome, setNome] = useState("");

  const enviar = async (evento) => {
    evento.preventDefault();

    const data = {
      title: nome,
    };

    const resultado = await AirtablePOST(data);

    if (resultado) {
      console.log("DEU CERTO");
    } else {
      console.log("deu errado");
    }
  };

  return (
    <form onSubmit={enviar}>
      <input
        type='text'
        placeholder='nome'
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
      />
      <button type='submit'>Enviar</button>
    </form>
  );
};

export default Formulario;
