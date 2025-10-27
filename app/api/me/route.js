import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, message: "No token found" },
        { status: 401 }
      );
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const user = await db.collection("users").findOne({ username: decoded.name });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }
    const amount = user.amount || 0;

    return NextResponse.json({ success: true, amount });
  } catch (err) {
    console.error("Error in /api/me:", err);
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}
