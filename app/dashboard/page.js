"use client";
import React from "react";
import Link from "next/link";
import { FaDollarSign, FaEarthAsia } from "react-icons/fa6";

const page = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">List reports</h2>
      <div className="flex flex-col text-[13px] font-semibold gap-4 md:gap-8 flex-wrap">
        <div className="flex md:flex-row flex-col gap-4">
          <Link href="/banktransfer" className="flex-1 md:w-full">
            <div className="h-30 bg-white p-3 flex flex-col items-center gap-5">
              <h3 className="w-full">LIST OF BANKS</h3>
              <FaEarthAsia size={50} className="text-[#30c1d1]" />
            </div>
          </Link>
          <Link href="/Depositrequest" className="flex-1 w-full">
            <div className="h-30 bg-white p-3 flex flex-col items-center gap-5">
              <h3 className="w-full">DEPOSITE REQUEST</h3>
              <FaDollarSign size={50} className="text-[#30c1d1]" />
            </div>
          </Link>
          <Link href="/Pendingdepositrequest" className="flex-1 w-full">
            <div className="h-30 bg-white p-3 flex flex-col items-center gap-5">
              <h3 className="w-full">PENDING DEPOSITE REQUEST</h3>
              <FaDollarSign size={50} className="text-[#30c1d1]" />
            </div>
          </Link>
          <Link href="/withdrawalrequest" className="flex-1 w-full">
            <div className="h-30 bg-white p-3 flex flex-col items-center gap-5">
              <h3 className="w-full">WITHDRAWAL REQUEST</h3>
              <FaDollarSign size={50} className="text-[#30c1d1]" />
            </div>
          </Link>
        </div>
        <div className="flex md:flex-row flex-col gap-4">
          <Link href="/Pendingwithdrawalrequest" className="flex-1 w-full">
            <div className="h-30 bg-white p-3 flex flex-col items-center gap-5">
              <h3 className="w-full">PENDING WITHDRAWAL REQUEST</h3>
              <FaDollarSign size={50} className="text-[#30c1d1]" />
            </div>
          </Link>
          <Link href="/Pre-payment_structure" className="flex-1 w-full">
          <div className="h-30 bg-white p-3 flex flex-col items-center gap-5">
            <h3 className="w-full">PRE-PAYMENT STRUCTURE</h3>
            <FaDollarSign size={50} className="text-[#30c1d1]" />
          </div>
        </Link>
        <Link href="/Deposit_history" className="flex-1 w-full">
          <div className="h-30 bg-white p-3 flex flex-col items-center gap-5">
            <h3 className="w-full">DEPOSITE HISTORY</h3>
            <FaDollarSign size={50} className="text-[#30c1d1]" />
          </div>
        </Link>
        <div className="flex-1 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
