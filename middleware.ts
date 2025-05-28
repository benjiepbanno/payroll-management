// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip public files and Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  // Because basePath is stripped, "/" here means "/payroll-management"
  // Protect routes under the basePath, e.g. "/", "/employee-details", etc.
  const protectedPaths = [
    "/",
    "/employee-details",
    "/carded-payrolls",
    "/payroll-registers",
  ];

  if (!protectedPaths.includes(pathname)) {
    // Allow other paths through (you can customize this)
    return NextResponse.next();
  }

  const cookie = request.headers.get("cookie") || "";
  const host = request.headers.get("host");
  console.log("Cookies: ", cookie);
  console.log("Host: ", host);

  const AFMIS_WEB_URL = process.env.AFMIS_WEB_URL;
  const AFMIS_LOCAL_URL = process.env.AFMIS_LOCAL_URL;
  const AFMIS_AUTHORIZATION = process.env.AFMIS_AUTHORIZATION;

  // Call PHP API to check session
  const res = await fetch(`${AFMIS_WEB_URL}/check-session`, {
    method: "POST",
    credentials: "include",
    headers: {
      Authorization: `${AFMIS_AUTHORIZATION}`,
      Cookie: cookie,
    },
  });

  const data = await res.json();
  console.log("Response: ", data);

  if (!data.authenticated) {
    const isInternal = host?.includes("192.168.100.244");
    const baseUrl = isInternal ? `${AFMIS_LOCAL_URL}` : `${AFMIS_WEB_URL}`;
    return NextResponse.redirect(baseUrl);
  }

  const response = NextResponse.next();
  return response;
}

export const config = {
  matcher: ["/:path*"],
};
