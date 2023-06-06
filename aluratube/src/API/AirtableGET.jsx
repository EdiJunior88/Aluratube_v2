//Componente que faz a leitura dos dados da API do Airtable
import axios from "axios";

const apiToken =
  "patPND63jgJIACm7x.7a39160fba3d6068bdf58cc4700298c3cb8c1eecefac66cd3da90e9c7e7ceaad";
const baseId = "appuDGSsnIKZOsWwk";
const tableName = "Videos";

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
