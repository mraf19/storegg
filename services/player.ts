import callAPI from "../config/api";
import { CheckOutTypes } from "./dataTypes";

const ROOT_URL = process.env.NEXT_PUBLIC_API;
const apiVersion = "api/v1";

export async function getFeaturedGame() {
  const url = `${ROOT_URL}/${apiVersion}/players/landingpage`;

  return callAPI({
    url,
    method: "GET",
  });
}

export async function getDetailVoucher(id: string) {
  const url = `${ROOT_URL}/${apiVersion}/players/${id}/detail`;

  return callAPI({
    url,
    method: "GET",
  });
}

export async function getCategory() {
  const url = `${ROOT_URL}/${apiVersion}/players/category`;

  return callAPI({
    url,
    method: "GET",
  });
}

export async function setCheckOut(data: CheckOutTypes) {
  const url = `${ROOT_URL}/${apiVersion}/players/checkout`;

  return callAPI({
    url,
    method: "POST",
    data,
    token: true,
  });
}

export async function getMemberOverview() {
  const url = `${ROOT_URL}/${apiVersion}/players/dashboard`;

  return callAPI({
    url,
    method: "GET",
    token: true,
  });
}
