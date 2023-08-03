import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

interface callAPITypes extends AxiosRequestConfig {
  token?: boolean;
  serverToken?: string;
}

export default async function callAPI({
  url,
  method,
  data,
  token,
  serverToken,
}: callAPITypes) {
  let headers = {};

  if (serverToken) {
    headers = {
      Authorization: `Bearer ${serverToken}`,
    };
  } else if (token) {
    const token = Cookies.get("token");
    const jwtTokens = atob(token!);
    headers = {
      Authorization: `Bearer ${jwtTokens}`,
    };
  }
  const response = await axios({
    url,
    method,
    data,
    headers,
  }).catch((err) => err.response);

  if (response.status > 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    };
    return res;
  }

  const { length } = Object.keys(response.data);
  const res = {
    error: false,
    message: "Success",
    data: length > 1 ? response.data : response.data.data,
  };
  return res;
}
