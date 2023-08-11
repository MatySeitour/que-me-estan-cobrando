import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest, respose: NextResponse) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key");
  console.log;

  if (process.env.API_KEY_SCRAPING !== key) {
    return new NextResponse(
      JSON.stringify({ success: false, message: "authentication failed" }),
      { status: 401, headers: { "content-type": "application/json" } }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/cron/:path*",
};
