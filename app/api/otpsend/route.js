import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import nodemailer from "nodemailer";
import CryptoJS from "crypto-js";

export async function POST(req) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { success: false, message: "Username and password are required" },
        { status: 400 }
      );
    }

    const secretKey = process.env.SECRET_KEY;
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const user = await db.collection("users").findOne({ username });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const decryptedPassword = CryptoJS.AES.decrypt(user.password, secretKey).toString(CryptoJS.enc.Utf8);
    const decryptedEmail = CryptoJS.AES.decrypt(user.email, secretKey).toString(CryptoJS.enc.Utf8);

    if (password !== decryptedPassword) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await db.collection("users").updateOne(
      { username },
      { $set: { otp, otpExpires: Date.now() + 5 * 60 * 1000 } }
    );

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT, 10),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();
    await transporter.sendMail({
      from: `"info" <${process.env.EMAIL_USER}>`,
      to: decryptedEmail,
      subject: `Your login code is ${otp}`,
      text: `Dear customer,\n\n your login code is ${otp}. Do not share it by anyone.`,
    });

    return NextResponse.json({
      success: true,
      message: "OTP sent successfully",
      email: decryptedEmail,
      username: user.username,
    });
  } catch (err) {
    console.error("Send OTP error:", err);
    return NextResponse.json(
      { success: false, message: "Server error: " + err.message },
      { status: 500 }
    );
  }
}
