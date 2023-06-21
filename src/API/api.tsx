import axios, { AxiosResponse } from "axios";

const url = "http://localhost/backend-gsis/public/api/";

export const post = async (
  api: string,
  form: any
): Promise<AxiosResponse<any, any>> => {
  return await axios.post(url + api, form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const postWithAuth = async (
  api: string,
  form: any,
  token: string
): Promise<AxiosResponse<any, any>> => {
  return await axios.post(url + api, form, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token, //Add this line
    },
  });
};

export const get = async (
  apiData: string
): Promise<AxiosResponse<any, any>> => {
  return await axios.get(url + apiData);
};

export const getWithAuth = async (
  apiData: string,
  token: string
): Promise<AxiosResponse<any, any>> => {
  return await axios.get(url + apiData, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token, //Add this line
    },
  });
};
