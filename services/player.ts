import axios from "axios";
import callAPI from "../config/api";

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
