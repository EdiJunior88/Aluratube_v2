import React, { useEffect, useState } from "react";
import { AirtableGET } from "../API/AirtableGET";
import Formulario from "./Formulario";
import Video from "./Video";

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
      <h1>Registros do Airtable</h1>
      <ul>
        {records.map((record) => (
          <div key={record.id}>
            <p>titulo - {record.fields.title}</p>
            <p>url - {record.fields.url}</p>
            <p>data - {record.fields.created_date}</p>
          </div>
        ))}
      </ul>
      <Formulario />
      <Video />
    </div>
  );
};

export default Home;
