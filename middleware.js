import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    await jwtVerify(token, secret); // ✅ Edge-compatible

    return NextResponse.next();
  } catch (err) {
    console.error("JWT verification failed:", err.message);
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/Deposit_history/:path*",
    "/ListOfEsposes/:path*",
    "/Pre-payment_structure/:path*",
    "/Depositrequest/:path*",
    "/Pendingdepositrequest/:path*",
    "/withdrawalrequest/:path*",
    "/Pendingwithdrawalrequest/:path*",
    "/Listofbanks/:path*",
    "/AddMoney/:path*",
  ],
};
