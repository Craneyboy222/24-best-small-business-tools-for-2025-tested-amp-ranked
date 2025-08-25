import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const cid = req.headers.get("x-correlation-id") || crypto.randomUUID();
  res.headers.set("x-correlation-id", cid);
  return res;
}

export const config = { matcher: "/:path*" };
