"use server";

import { headers } from "next/headers";

export async function checkSessionFromServer() {
  const headersList = await headers();
  const cookie = headersList.get("cookie") || "";
  const host = headersList.get("host");

  console.log("Server Action Cookies: ", cookie);
  console.log("Server Action Host: ", host);

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
  console.log("Server Action Response: ", data);

  return {
    host: host,
    user_id: data.user_id,
    user_name: data.user_name,
  };
}
