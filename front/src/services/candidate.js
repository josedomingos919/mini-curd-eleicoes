import axios from "axios";

import { apiUrl } from "../util/conts/apiUrl";

export const add = async ({ bi, nome, sobrenome }) => {
  try {
    const response = axios.post(apiUrl + "candidate", { bi, nome, sobrenome });

    return response;
  } catch (error) {
    console.log(error);

    return error.response;
  }
};

export const update = async ({ bi, nome, sobrenome, id }) => {
  try {
    const response = axios.put(apiUrl + "candidate", {
      bi,
      nome,
      sobrenome,
      id,
    });

    return response;
  } catch (error) {
    console.log(error);

    return error.response;
  }
};

export const remove = async (id) => {
  try {
    const response = axios.delete(`${apiUrl}candidate/${id}`);

    return response;
  } catch (error) {
    console.log(error);

    return error.response;
  }
};

export const getOne = async (id) => {
  try {
    const response = axios.get(`${apiUrl}candidate/${id}`);

    return response;
  } catch (error) {
    console.log(error);

    return error.response;
  }
};

export const getAll = async () => {
  try {
    const response = axios.get(`${apiUrl}candidate`);

    return response;
  } catch (error) {
    console.log(error);

    return error.response;
  }
};
