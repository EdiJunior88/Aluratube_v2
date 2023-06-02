//Componente que insere os dados na API do Airtable
import axios from "axios";

const apiToken = import.meta.env.VITE_API_TOKEN;
const baseId = import.meta.env.VITE_API_BASE_ID;
const tableName = import.meta.env.VITE_API_TABLE_NAME;

const url = `https://api.airtable.com/v0/${baseId}/${tableName}`;

const Airtable = axios.create({
  baseURL: url,
  headers: {
    Authorization: `Bearer ${apiToken}`,
  },
});

export const AirtablePOST = async (data) => {
  try {
    const resposta = await Airtable.post("/", {
      fields: data,
    });
    return resposta.data;
  } catch (erro) {
    console.log("Erro ao obter os dados do Airtable");
  }
};
