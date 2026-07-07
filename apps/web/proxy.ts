import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const sessionCookie = request.cookies.get("lyvaby-auth.session_token");

    const isPrivateRoute = request.nextUrl.pathname.startsWith("/checkout") ||
        request.nextUrl.pathname.startsWith("/account");

    if (isPrivateRoute && !sessionCookie) {
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

// Konfigurasi halaman mana saja yang terpengaruh oleh middleware ini
export const config = {
    matcher: ["/checkout/:path*", "/account/:path*"],
};