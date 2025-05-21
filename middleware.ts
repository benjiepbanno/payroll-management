// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {

  const pathname = request.nextUrl.pathname;
  const baseUrl = request.nextUrl.origin;

  // Skip public files and Next.js internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/api')
  ) {
    return NextResponse.next();
  }

  // Because basePath is stripped, "/" here means "/payroll-management"
  // Protect routes under the basePath, e.g. "/", "/employee-details", etc.
  const protectedPaths = ['/', '/employee-details', '/carded-payrolls', '/payroll-registers'];

  if (!protectedPaths.includes(pathname)) {
    // Allow other paths through (you can customize this)
    return NextResponse.next();
  }

  // Call PHP API to check session
  const res = await fetch("http://localhost:8080/sample/check-session.php", {
    credentials: "include",
    headers: {
      Cookie: request.headers.get("cookie") || "",
    },
  });

  const data = await res.json();

  if (!data.authenticated) {
    // Redirect back to this page after login
    const returnUrl = encodeURIComponent(`${baseUrl}${pathname}`);
    const loginUrl = `${data.login_url}?redirect=${returnUrl}`;

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
