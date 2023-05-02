import React from "react";
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
    });
    return resposta.data.records;
  } catch (erro) {
    console.log("Erro de fetch do Airtable ", erro);
  }
};
