//Componente que faz a leitura dos dados da API do Airtable
import axios from "axios";

const apiToken = import.meta.env.VITE_API_TOKEN;
const baseId = import.meta.env.VITE_API_BASE_ID;
const tableName = import.meta.env.VITE_API_TABLE_NAME;

const url = `https://api.airtable.com/v0/${baseId}/${tableName}`;

export const AirtableGET = async () => {
  try {
    const resposta = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
      params: {
        sort: [
          {
            field: "created_date",
            direction: "asc",
          },
        ],
      },
    });
    return resposta.data.records;
  } catch (erro) {
    console.log("Erro ao obter os dados do Airtable");
  }
};
