import { innloggingsstatistikkUrl } from "../urls.js";

class FetchError extends Error {
  constructor(response, message) {
    super(message);
    this.response = response;
  }
}

const checkResponse = (response) => {
  if (!response.ok) {
    throw new FetchError(response, "Fetch request failed");
  }
};

export const fetcher = async ({ queryKey }) => {
  const response = await fetch(queryKey, {
    method: "GET",
    credentials: "include",
  });
  checkResponse(response);

  return response.json();
};

export const manifestFetcher = async ({ queryKey }) => {
  const response = await fetch(queryKey, { method: "GET" });
  checkResponse(response);

  return response.json();
};

export async function postInnloggingsstatistikk() {
  try {
    await fetch(innloggingsstatistikkUrl, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  } catch {
    console.warn("Klarte ikke å sende innloggingsstatistikk");
  }
}
