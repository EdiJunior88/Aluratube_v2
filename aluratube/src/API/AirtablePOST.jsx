//Componente que insere os dados na API do Airtable
import axios from "axios";

const apiToken =
  "patPND63jgJIACm7x.7a39160fba3d6068bdf58cc4700298c3cb8c1eecefac66cd3da90e9c7e7ceaad";
const baseId = "appuDGSsnIKZOsWwk";
const tableName = "Videos";

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
