import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


// export type TUserRole = 'ADMIN' | "DOCTOR" | "PATIENT" ;

export type RouteConfig = {
  exact: string[],
  patterns: RegExp[]
}


const roleBasedRoutes = {
  ADMIN: ["/admin/dashboard"],
  DOCTOR: ["/doctor/dashboard"],
  PATIENT: [
    "/patient/dashboard",
    "/patient/appointments",
    "/patient/medical-records",
  ],
};

const authRoutes = ["/login", "/register", "/forgot-password"];

export async function proxy(request: NextRequest) {
  // const accessToken = request.cookies.get("accessToken")?.value;
  // const refreshToken = request.cookies.get("refreshToken")?.value;

  // const { pathname } = request.nextUrl;

  // if (!accessToken && !refreshToken && !authRoutes.includes(pathname)) {
  //   return NextResponse.redirect(
  //     new URL(`/login?redirect=${pathname}`, request.url)
  //   );
  // }

  // let user: IUser | null = null;

  // if (accessToken) {
  //   try {
  //     user = jwtDecode(accessToken); // {id: string, email: string, role: "ADMIN"| "DOCTOR" | "PATIENT", exp: number, iat: number}
  //   } catch (err) {
  //     console.log("Error decoding access token:", err);
  //     return NextResponse.redirect(
  //       new URL(`/login?redirect=${pathname}`, request.url)
  //     );
  //   }
  // }

  // if (!user && refreshToken) {
  //   try {
  //     const refreshRes = await fetch(
  //       `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ refreshToken }),
  //       }
  //     );
  //     if (refreshRes.ok) {
  //       const newAccessToken = request.cookies.get("accessToken")?.value;
  //       user = jwtDecode(newAccessToken!);
  //       return NextResponse.next();
  //     } else {
  //       const response = NextResponse.redirect(
  //         new URL(`/login?redirect=${pathname}`, request.url)
  //       );
  //       response.cookies.delete("accessToken");
  //       response.cookies.delete("refreshToken");
  //       return response;
  //     }
  //   } catch (err) {
  //     console.log("Error refreshing token:", err);
  //     const response = NextResponse.redirect(
  //       new URL(`/login?redirect=${pathname}`, request.url)
  //     );
  //     response.cookies.delete("accessToken");
  //     response.cookies.delete("refreshToken");
  //     return response;
  //   }
  // }

  // if (user) {
  //   const allowedRoutes = user ? roleBasedRoutes[user.role] : [];
  //   if (allowedRoutes && allowedRoutes.some((r) => pathname.startsWith(r))) {
  //     return NextResponse.next();
  //   } else {
  //     return NextResponse.redirect(new URL(`/unauthorized`, request.url));
  //   }
  // }

  // if (user && authRoutes.includes(pathname)) {
  //   return NextResponse.redirect(new URL(`/`));
  // }

  // return NextResponse.next();






}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.well-known).*)",
  ],
};
