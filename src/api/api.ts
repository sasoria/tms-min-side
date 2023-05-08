import { innloggingsstatistikkUrl } from "../urls.js";

export const fetcher = async (path: string) => {
  const response = await fetch(path, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Fetch request failed");
  }

  return await response.json();
};

export const manifestFetcher = async (path: string) => {
  const response = await fetch(path, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Fetch request failed");
  }

  return await response.json();
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
