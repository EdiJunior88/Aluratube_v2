import React, { useEffect, useState } from "react";
import { AirtableGET } from "../API/AirtableGET";
import Formulario from "./Formulario";
import Video from "./Video";
import Cabecalho from "./Cabecalho";

const Home = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resultado = await AirtableGET();
      setRecords(resultado);
    };
    fetchData();
  }, [records]);

  return (
    <div>
      <Cabecalho />
      <Formulario />
      <Video />
    </div>
  );
};

export default Home;
