"use server";

import { headers } from "next/headers";

type FetchResponse = {
  body: any;
  error: string | null;
};

export async function checkSessionFromServer() {
  const headersList = await headers();
  const cookie = headersList.get("cookie") || "";
  const host = headersList.get("host");

  // console.log("Server Action Cookies: ", cookie);
  // console.log("Server Action Host: ", host);

  const AFMIS_WEB_URL = process.env.AFMIS_WEB_URL;
  // const AFMIS_LOCAL_URL = process.env.AFMIS_LOCAL_URL;
  const AFMIS_AUTHORIZATION = process.env.AFMIS_AUTHORIZATION;

  const res = await fetch(`${AFMIS_WEB_URL}/check-session`, {
    method: "POST",
    credentials: "include",
    headers: {
      Authorization: `${AFMIS_AUTHORIZATION}`,
      Cookie: cookie,
    },
  });

  const data = await res.json();
  // console.log("Server Action Response: ", data);

  return {
    host: host,
    user_id: data.user_id,
    user_name: data.user_name,
  };
}


export async function fetchUserAuthorization(values: {
  user_id: string
}): Promise<FetchResponse> {
  try {

    const {user_id} = values;

    const API_BASE_URL =
      process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000/api";

    const baseUrl = `${API_BASE_URL}/payroll-management/authorizations/${user_id}`;

    const url = new URL(baseUrl);

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return {
        body: null,
        error: "An error occurred while fetching data",
      };
    }

    const data = await response.json();

    return {
      body: data.body,
      error: data.error,
    };
  } catch (error) {
    return {
      body: null,
      error: "Server error. Please check the API connection.",
    };
  }
}
