import axios from "axios";

import { apiUrl } from "../util/conts/apiUrl";

export const login = async ({ phone, password }) => {
  try {
    const response = axios.post(apiUrl + "user/login", { phone, password });

    return response;
  } catch (error) {
    console.log(error);

    return error.response;
  }
};
