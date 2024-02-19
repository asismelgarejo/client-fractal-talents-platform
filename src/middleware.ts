import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isLogged = request.cookies.get("auth");
  if (isLogged) {
    if (request.nextUrl.pathname.startsWith("/login"))
      return NextResponse.redirect(new URL("/home", request.url));
  } else {
    if (request.nextUrl.pathname.startsWith("/home/nuevo_talento")) {
      return NextResponse.redirect(new URL("/home", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/home", "/login", "/home/nuevo_talento"],
};
