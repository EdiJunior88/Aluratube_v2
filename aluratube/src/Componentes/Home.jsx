import React, { useEffect, useState } from "react";
import { AirtableGET } from "../API/AirtableGET";

const Home = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resultado = await AirtableGET();
      setRecords(resultado);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Registros do Airtable</h1>
      <ul>
        {records.map((record) => (
          <div key={record.id}>
            <p>{record.fields.title}</p>
            <p>{record.fields.url}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Home;
