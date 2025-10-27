import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";

export async function POST(req) {
  try {
    const { email, otp } = await req.json();
    const secretKey = process.env.SECRET_KEY;

    if (!email || !otp) {
      return NextResponse.json(
        { success: false, message: "Email and OTP are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const user = await db.collection("users").findOne({ username:email });

    if (!user || !user.otp) {
      return NextResponse.json(
        { success: false, message: "No OTP found" },
        { status: 400 }
      );
    }
    const decryptedEmail = CryptoJS.AES.decrypt(user.email, secretKey).toString(CryptoJS.enc.Utf8);


    if (user.otp === otp && user.otpExpires > Date.now()) {
      await db.collection("users").updateOne(
        { email },
        { $unset: { otp: "", otpExpires: "" } }
      );


      const token = jwt.sign(
        { name: user.username, id: user._id, email: decryptedEmail },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );


      const response = NextResponse.json({
        success: true,
        message: "OTP verified successfully",
        token,
      });


      response.cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 24 * 60 * 60,
      });

      return response;
    }

    return NextResponse.json(
      { success: false, message: "Invalid or expired OTP" },
      { status: 400 }
    );
  } catch (err) {
    console.error("Verify OTP error:", err);
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}
