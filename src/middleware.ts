import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isLogged = request.cookies.get("auth");
  console.log("isLogged", isLogged);

  if (!isLogged) {
    if (request.nextUrl.pathname.startsWith("/login")) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/login", request.url));
  } else {
    if (request.nextUrl.pathname.startsWith("/home")) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/home", request.url));
  }
  // return NextResponse.next();
}

export const config = {
  matcher: ["/home", "/login"],
};
