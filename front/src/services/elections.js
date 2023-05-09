import axios from "axios";

import { apiUrl } from "../util/conts/apiUrl";

export const add = async ({
  tipo = "",
  finshed = 0,
  eleitor = [],
  candidatos = [],
}) => {
  try {
    const response = axios.post(apiUrl + "election", {
      tipo,
      finshed,
      eleitor,
      candidatos,
    });

    return response;
  } catch (error) {
    console.log(error);

    return error.response;
  }
};

export const getAll = async () => {
  try {
    const response = axios.get(`${apiUrl}election`);

    return response;
  } catch (error) {
    console.log(error);

    return error.response;
  }
};


export const finish = async (id) => {
  try {
    const response = axios.post(`${apiUrl}election/finish/${id}`);

    return response;
  } catch (error) {
    console.log(error);

    return error.response;
  }
};

