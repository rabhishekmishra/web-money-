"use client";
import { IoMdArrowDropdown } from "react-icons/io";
import React from "react";
import Column from "@/components/Column";

const depositrequest = () => {
  return (
    <div className="flex gap-4">
      <div className="flex-1 w-full m-1 bg-white p-2 rounded-sm">
        <h2 className="font-semibold my-1">WITHDRAWAL REQUESTS</h2>
        <div className="flex flex-col items-start my-2 gap-3 p-2 bg-gray-200">
          <div className="flex md:flex-row flex-col w-full gap-4">
            <input
              type="date"
              placeholder=""
              className="border-gray-400 flex-1 w-full p-1 border-2 px-2 bg-white rounded-sm"
            />
            <div className="flex-1 px-2 bg-white rounded-xs border-2 border-gray-400 relative">
              <input
                type="text"
                readOnly
                placeholder="Filter by date created"
                className="p-1 px-2 w-full cursor-pointer focus:ring-0 focus:outline-none"
              />
              <div className="absolute right-2 top-2">
                <IoMdArrowDropdown size={20} className={``} />
              </div>
            </div>
            <input
              type="text"
              placeholder="ID"
              className="border-gray-400 flex-1 w-full p-1 border-2 px-2 bg-white rounded-sm"
            />
            <input
              type="text"
              placeholder="User ID"
              className="border-gray-400 flex-1 w-full p-1 border-2 px-2 bg-white rounded-sm"
            />
          </div>
          <div className="flex md:flex-row flex-col w-full gap-4">
            <input
              type="text"
              placeholder="Admin"
              className="border-gray-400 flex-1 w-full p-1 border-2 px-2 bg-white rounded-sm"
            />
            <input
              type="text"
              placeholder="Amount"
              className="border-gray-400 flex-1 w-full p-1 border-2 px-2 bg-white rounded-sm"
            />
            <input
              type="text"
              placeholder="User info"
              className="border-gray-400 flex-1 w-full p-1 border-2 px-2 bg-white rounded-sm"
            />
            <div className="flex-1 px-2 w-full bg-white rounded-xs border-2 border-gray-400 relative">
              <input
                type="text"
                readOnly
                placeholder="All statuses"
                className="p-1 px-2 w-full cursor-pointer focus:ring-0 focus:outline-none"
              />
              <div className="absolute right-2 top-2">
                <IoMdArrowDropdown size={20} className={``} />
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col w-full gap-4">
            <div className="flex-1">
              <div className="flex-1 bg-white rounded-xs border-2 border-gray-400 relative">
                <input
                  type="text"
                  readOnly
                  placeholder="All providers"
                  className="p-1 w-full cursor-pointer focus:ring-0 focus:outline-none"
                />
                <div className="absolute right-2 top-2">
                  <IoMdArrowDropdown size={20} className={``} />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex-1 bg-white rounded-xs border-2 border-gray-400 relative">
                <input
                  type="text"
                  readOnly
                  placeholder="All countries"
                  className="p-1 w-full cursor-pointer focus:ring-0 focus:outline-none"
                />
                <div className="absolute right-2 top-2">
                  <IoMdArrowDropdown size={20} className={``} />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex-1 bg-white rounded-xs border-2 border-gray-400 relative">
                <input
                  type="text"
                  readOnly
                  placeholder="All banks"
                  className="p-1 w-full cursor-pointer focus:ring-0 focus:outline-none"
                />
                <div className="absolute right-2 top-2">
                  <IoMdArrowDropdown size={20} className={``} />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex-1 bg-white rounded-xs border-2 border-gray-400 relative">
                <input
                  type="text"
                  readOnly
                  placeholder="Available currencies"
                  className="p-1 w-full cursor-pointer focus:ring-0 focus:outline-none"
                />
                <div className="absolute right-2 top-2">
                  <IoMdArrowDropdown size={20} className={``} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col w-full gap-4">
            <div className="flex-1 bg-white rounded-xs border-2 border-gray-400 relative">
                <input
                  type="text"
                  readOnly
                  placeholder="Select refferal"
                  className="p-1 w-full cursor-pointer focus:ring-0 focus:outline-none"
                />
                <div className="absolute right-2 top-2">
                  <IoMdArrowDropdown size={20} className={``} />
                </div>
              </div>
              <div className="flex-1">
              <button className="bg-[#30c1d1] text-white p-2 w-full rounded">
                Apply
              </button>
            </div>
          </div>
        </div>
        <Column/>
        <div className="text-center mt-4">No data</div>
      </div>
    </div>
  );
};

export default depositrequest;
