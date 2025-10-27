"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

// Validation schema
const schema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(1, "Password is required"),
});

const Login = () => {
  const [contryLang, setContryLang] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [email, setEmail] = useState("");
  const router = useRouter();

  const messageRef = useRef(null);

  // Login form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  // OTP form
  const {
    register: otpRegister,
    handleSubmit: handleOtpSubmit,
    formState: { isSubmitting: otpSubmitting },
  } = useForm();

  // Login submit
  const onLoginSubmit = async (data) => {
    try {
      const res = await fetch("/api/otpsend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        setEmail(result.username);
        setShowOtp(true); // show OTP form
        messageRef.current.textContent = "";
        messageRef.current.style.display = "none";
      } else {
        messageRef.current.style.display = "block";
      messageRef.current.textContent = result.message;
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  const onOtpSubmit = async (data) => {
    try {
      const res = await fetch("/api/verifyotp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp: data.otp, email }), // send email + otp
      });

      const result = await res.json();

      if (result.success) {
        //  Store the JWT token in localStorage
        if (result.token) {
          localStorage.setItem("token", result.token);
        }
        //  Redirect to dashboard
        messageRef.current.textContent = "";
        messageRef.current.style.display = "none";
        router.push("/dashboard");
      } else {
        messageRef.current.textContent = result.message;
        messageRef.current.style.display = "block";
      }
    } catch (err) {
      console.error("OTP error:", err);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 md:p-4 h-110 w-80 md:w-120 border rounded-lg border-black shadow-lg bg-[#282e38]/80">
      {/* Language Dropdown */}
      <div
        onClick={() => setContryLang(!contryLang)}
        className="flex justify-end p-2 w-full cursor-pointer relative"
      >
        <Image
          src="/flag.jpeg"
          alt="Country Flag"
          width={25}
          height={25}
          className="rounded-full mx-2 cursor-pointer"
        />
        <div className="text-white font-bold">EN</div>
        <IoIosArrowDown className="text-white text-2xl" />
      </div>

      <div className="p-2">
        <Image src="/logo.svg" alt="Logo" width={300} height={300} />
      </div>

      <div className="md:w-2xs flex flex-col gap-5 text-black w-full">
        {!showOtp ? (
          // Login Form
          <form
            onSubmit={handleSubmit(onLoginSubmit)}
            className="flex mx-4 flex-col gap-4"
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center bg-white p-2 rounded-md">
                <IoPerson />
                <input
                  type="text"
                  {...register("username")}
                  className="bg-white w-full px-2 text-xl outline-none"
                  placeholder="Enter Username"
                />
              </div>
              {errors.username && (
                <p className="text-red-500 text-sm">
                  {errors.username.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center bg-white p-2 rounded-md">
                <FaLock />
                <input
                  type="password"
                  {...register("password")}
                  className="bg-white w-full px-2 text-xl outline-none"
                  placeholder="Enter Password"
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`p-2 rounded text-white font-bold ${
                isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
              }`}
            >
              {isSubmitting ? "Logging in..." : "LOG IN"}
            </button>
            <p
              ref={messageRef}
              style={{ display: "none", color: "red", fontSize: "14px" }}
              className="text-center"
            ></p>
          </form>
        ) : (
          // OTP Form
          <form
            onSubmit={handleOtpSubmit(onOtpSubmit)}
            className="flex mx-4 flex-col gap-4"
          >
            <div className="flex items-center bg-white p-2 rounded-md">
              <FaLock />
              <input
                type="text"
                {...otpRegister("otp", { required: "OTP is required" })}
                placeholder="Enter OTP"
                className="bg-white w-full px-2 text-xl outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={otpSubmitting}
              className={`p-2 rounded text-white font-bold ${
                otpSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
              }`}
            >
              {otpSubmitting ? "Verifying..." : "ENTER OTP"}
            </button>
            <p
              ref={messageRef}
              style={{ display: "none", color: "red", fontSize: "14px" }}
              className="text-center"
            ></p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
