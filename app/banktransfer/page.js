"use client";
import { IoMdArrowDropdown } from "react-icons/io";
import React from "react";
import Link from "next/link";

const banktransfer = () => {
  return (
    <div className="flex gap-4">
      <div className="flex-1 w-full m-1 bg-white p-2 rounded-sm">
        <h2 className="font-semibold my-1">LIST OF BANKS</h2>
        <div className="flex md:flex-row flex-col  items-center my-2 gap-3 p-2 bg-gray-200">
          <div className="flex-1 w-full px-2 bg-white rounded-xs border-2 border-gray-400 relative">
            <input
              type="text"
              readOnly
              placeholder="1xbet"
              className="p-1 w-full cursor-pointer focus:ring-0 focus:outline-none placeholder:text-black"
            />
            <div className="absolute right-2 top-2">
              <IoMdArrowDropdown size={20} className={``} />
            </div>
          </div>
          <Link href={"/Listofbanks"} className="flex-1 flex flex-col items-start w-full my-2 gap-1 bg-gray-200">
            <button className="bg-[#30c1d1] cursor-pointer font-semibold text-white p-2 rounded-md w-full">
              APPLY
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default banktransfer;
