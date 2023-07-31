import axios from "axios";
import { LogInTypes } from "./dataTypes";
import callAPI from "../config/api";

const ROOT_URL = process.env.NEXT_PUBLIC_API;
const apiVersion = "api/v1";

export async function setSignUp(data: FormData) {
  const url = `${ROOT_URL}/${apiVersion}/auth/signup`;

  return callAPI({
    url,
    method: "POST",
    data,
  });
}

export async function setLogIn(data: LogInTypes) {
  const url = `${ROOT_URL}/${apiVersion}/auth/signin`;

  return callAPI({
    url,
    method: "POST",
    data,
  });
}
