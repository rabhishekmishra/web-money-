"use client";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import React from "react";
import Column from "@/components/Column";

const pendingdepositrequest = () => {
  const [showRemove, setshowRemove] = useState(false);
  const toggleshow = () => {
    setshowRemove(!showRemove);
  };
  return (
    <div className="flex gap-4">
      <div className="flex-1 w-full m-1 bg-white p-2 rounded-sm">
        <h2 className="font-semibold my-1">PENDING WITHDRAWAL REQUEST</h2>
        <div className="flex flex-col items-start my-2 gap-3 p-2 bg-gray-200">
          <div className="flex md:flex-row flex-col w-full gap-4">
            <input
              type="date"
              placeholder=""
              className="border-gray-400 flex-1 w-full p-1 border-2 px-2 bg-white rounded-sm"
            />
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
            <input
              type="text"
              placeholder="User info"
              className="border-gray-400 flex-1 w-full p-1 border-2 px-2 bg-white rounded-sm"
            />
          </div>
          <div className="flex md:flex-row flex-col w-full gap-4">
            <input
              type="text"
              placeholder="Processing time"
              className="border-gray-400 flex-1 w-full p-1 border-2 px-2 bg-white rounded-sm"
            />
            <div className="flex-1 px-2 bg-white rounded-xs border-2 border-gray-400 relative">
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
            <div className="flex-1 px-2 bg-white rounded-xs border-2 border-gray-400 relative">
              <input
                type="text"
                readOnly
                placeholder="All partners"
                className="p-1 w-full cursor-pointer focus:ring-0 focus:outline-none"
              />
              <div className="absolute right-2 top-2">
                <IoMdArrowDropdown size={20} className={``} />
              </div>
            </div>
            <div className="flex-1 px-2 bg-white rounded-xs border-2 border-gray-400 relative">
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
          <div className="flex md:flex-row flex-col w-full gap-4 items-center">
            <div className="flex-1 w-full md:text-center text-start">
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
            <div className="flex-1 w-full md:text-center text-start">
              <div className="flex flex-1 text-gray-700 gap-2 items-center">
                <p>AutoUpdate </p>
                <div
                  onClick={toggleshow}
                  className={`bg-blue-500 w-16 cursor-pointer h-7 flex items-center rounded-full p-1 justify-between ${
                    !showRemove && "flex-row-reverse bg-gray-400"
                  }`}
                >
                  <div className="text-white text-sm">
                    {showRemove ? "ON" : "OFF"}
                  </div>
                  <div className="h-full w-6 bg-white rounded-full "></div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <button className="bg-[#30c1d1] text-white p-2 w-full rounded">
                Apply
              </button>
            </div>
          </div>
        </div>
        <Column />
        <div className="text-center mt-4">No data</div>
      </div>
    </div>
  );
};

export default pendingdepositrequest;
