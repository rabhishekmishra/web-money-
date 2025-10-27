import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    // One document in collection "notes"
    const settings = await db.collection("notes").findOne({});
    if (!settings) {
      return NextResponse.json({
        success: false,
        message: "Settings not found",
      });
    }

    return NextResponse.json({
      success: true,
      usdToInr: settings.dollar,
      minDeposit: settings.minamount,
    });
  } catch (error) {
    console.error("MongoDB error:", error);
    return NextResponse.json({ success: false, message: "Server error" });
  }
}
