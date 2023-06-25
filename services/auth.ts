import axios from "axios";

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
