import React from "react";
import Formulario from "./Formulario";
import Cabecalho from "./Cabecalho";
import Usuario from "./Usuario";

const Home = () => {
  return (
    <div>
      <div>
        <Cabecalho />
      </div>
      <Usuario />
      <Formulario />
    </div>
  );
};

export default Home;
