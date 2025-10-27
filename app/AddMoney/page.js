"use client";
import React, { useState, useEffect, useRef } from "react";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { IoCopyOutline } from "react-icons/io5";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Page = () => {
  const [copied, setCopied] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [usdToInr, setUsdToInr] = useState(null);
  const [minDeposit, setMinDeposit] = useState(null);
  const textRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/settings");
        const data = await res.json();
        if (data.success) {
          setUsdToInr(data.usdToInr);
          setMinDeposit(data.minDeposit);
        }
      } catch (err) {
        console.error("Error fetching settings:", err);
      }
    };
    fetchData();
  }, []);

  const handleCopy = async () => {
    const text = textRef.current?.innerText || "";
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      console.error("Copy failed");
    }
  };

  const handleClose = () => router.back();

  return (
    <div>
      {showPopup && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-gray-500 rounded-lg shadow-lg pb-8 w-[90%] md:w-[400px] text-center">
            <button
              onClick={handleClose}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
            >
              ×
            </button>

            <div className="flex w-full p-5 rounded-t-lg bg-[#2d6c73] justify-center items-center">
              <HiOutlineCurrencyDollar
                size={60}
                className="w-full text-amber-500"
              />
            </div>

            <div className="text-lg px-8 flex flex-col gap-1 my-5 text-left">
              <div>
                <span className="text-red-500">ONLY send USD</span> to this
                deposit address.
              </div>
              <div className="">1 USD = {usdToInr && `${usdToInr} INR`}</div>
              <div className="text-start">
                <span className="text-red-500">Do NOT use</span> Lightning
                Network, BEP20, BEP2, ERC20, Polygon or other network standards
                as you may lose your deposit.{" "}
                <span className="text-red-500">
                  ONLY make deposits through the USD network.
                </span>
              </div>
              <div className="text-start">
                By clicking the "confirm" button, you indicate that you agree to
                the above mentioned risks.{" "}
              </div>

              <button
                onClick={() => setShowPopup(false)}
                className="bg-[#30c1d1] w-full text-white px-6 mt-5 p-2 rounded-md font-semibold hover:bg-[#26a8b6] transition"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {!showPopup && (
        <div className="bg-white rounded-sm">
          <div className="p-5">
            <h3 className="font-bold">ADD MONEY</h3>
            <div className="flex flex-col  items-center my-5 gap-8 bg-gray-200 rounded-sm p-5">
              <div className="flex flex-col text-[10px] md:text-sm items-start md:items-center">
                <div className="">1 USD = {usdToInr && `${usdToInr} INR`}</div>
                <div>Copy the address or scan the QR code.</div>
                <div className="flex items-center flex-wrap">
                  <div
                    ref={textRef}
                    className="rounded text-gray-800 text-[10px] md:text-sm"
                  >
                    bc1qu356eaazxf3cplse0e633m5pjqzcmh50ry25h3
                  </div>
                  <button
                    onClick={handleCopy}
                    className={`p-1 text-blue-500 rounded ${
                      copied ? "text-green-500 cursor-not-allowed" : ""
                    }`}
                  >
                    <IoCopyOutline />
                  </button>
                  <span>{copied && "Copied!"}</span>
                </div>
              </div>
              <Image src="/qr.jpeg" alt="Add Money" width={200} height={200} />
              <div className="flex  flex-col md:text-lg text-sm items-center mb-5 bg-[#30c1d1]">
                <div className="font-semibold md:w-lg p-2">
                  Minimum deposit amount is {minDeposit && `${minDeposit} USD`}.
                  If you transfer a deposit amount below the specified limit,
                  your funds will be lost.
                </div>
                <div className="font-semibold md:w-lg p-2 mt-6">
                  Please note that the exchange rate at the completion of the
                  transaction may differ slightly from the above.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
