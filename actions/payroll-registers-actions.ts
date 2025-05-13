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


export async function fetchPayrollRegister(values: {
  fiscal_year: string;
  fund: string;
  advno: string;
  tracking_number: string;
}): Promise<FetchResponse> {
  try {

    const { fiscal_year, fund, advno, tracking_number } = values;

    const API_BASE_URL =
      process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000/api";

    const baseUrl = `${API_BASE_URL}/payroll-management/payroll-registers/periods`;

    const url = new URL(baseUrl);

    if (fiscal_year) {
      url.searchParams.append("fiscal_year", fiscal_year);
    }

    if (fund) {
      url.searchParams.append("fund", fund);
    }

    if (advno) {
      url.searchParams.append("advno", advno);
    }

    if (tracking_number) {
      url.searchParams.append("tracking_number", tracking_number);
    }

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
    console.log(
      "Payroll Register Actions fetchPayrollRegister response:",
      data
    );

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
