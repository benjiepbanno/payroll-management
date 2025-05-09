"use server";

import { headers } from "next/headers";


type FetchResponse = {
  body: any;
  error: string | null;
};

export async function getClientIpAction() {
  const headersList = await headers();
  const forwardedFor = headersList.get("x-forwarded-for");
  const rawIp = forwardedFor?.split(",")[0]?.trim() || "unknown";
  const ip = rawIp.replace(/^::ffff:/, ""); // Strips IPv6-mapped prefix if present

  // Send to backend or save to DB
  console.log("Client IP:", ip);

  return { success: true };
}


export async function fetchPayrollRegisterPeriods(values: {
  fiscal_year: string;
  fund: string;
  advno: string;
  tracking_number: string;
}): Promise<FetchResponse> {
  return {
    body: null,
    error: null,
  }
}


