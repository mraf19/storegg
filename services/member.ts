import callAPI from "../config/api";

const ROOT_URL = process.env.NEXT_PUBLIC_API;
const apiVersion = "api/v1";

export async function getMemberOverview() {
  const url = `${ROOT_URL}/${apiVersion}/players/dashboard`;

  return callAPI({
    url,
    method: "GET",
    token: true,
  });
}

export async function getTransaction(status: string) {
  let params = "";
  if (status === "all") {
    params = "";
  } else {
    params = `?status=${status}`;
  }
  const url = `${ROOT_URL}/${apiVersion}/players/history${params}`;

  return callAPI({
    url,
    method: "GET",
    token: true,
  });
}

export async function getTransactionDetail(id: string, serverToken: string) {
  const url = `${ROOT_URL}/${apiVersion}/players/history/${id}/detail`;

  return callAPI({
    url,
    method: "GET",
    serverToken,
  });
}
