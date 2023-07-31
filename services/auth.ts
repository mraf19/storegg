import axios from "axios";
import { LogInTypes } from "./dataTypes";

const ROOT_URL = process.env.NEXT_PUBLIC_API;
const apiVersion = "api/v1";

export async function setSignUp(data: any) {
  const URL = `auth/signup`;

  const response = await axios
    .post(`${ROOT_URL}/${apiVersion}/${URL}`, data)
    .catch((err) => err.response);
  const axiosResponse = response.data;

  if (axiosResponse.error === 1) {
    return axiosResponse;
  }

  return axiosResponse.data;
}

export async function setLogIn(data: LogInTypes) {
  const URL = `auth/signin`;

  const response = await axios
    .post(`${ROOT_URL}/${apiVersion}/${URL}`, data)
    .catch((err) => err.response);

  if (response.status > 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    };
    return res;
  }

  const res = {
    error: false,
    message: "Success",
    data: response.data.data,
  };
  return res;
}
