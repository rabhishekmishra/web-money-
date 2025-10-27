"use client";
import React from "react";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const listofbanks = () => {
  const [showRemove, setshowRemove] = useState(false);
  const [fileName, setFileName] = useState("upload screenshot");

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("No file selected");
    }
  };
  const toggleshow = () => {
    setshowRemove(!showRemove);
  };
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1 w-full m-1 bg-white p-2 rounded-sm">
        <h2 className="font-semibold my-1">EDIT</h2>
        <div className="flex flex-col items-start my-2 gap-3 p-2 bg-gray-200">
          <div className="flex flex-col w-full">
            <h3 className="font-semibold text-sm">Bank name</h3>
            <div className="flex md:flex-row flex-col w-full py-2 gap-4">
              <input
                type="text"
                placeholder=""
                className="border-gray-400  flex-1 w-full p-1 border-2 px-2 bg-white rounded-sm"
              />
              <div className="flex-1 px-2">
                <div className="flex flex-1 text-gray-700 gap-2 items-center">
                  <p>Active?</p>
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
            </div>
          </div>
          <div className="flex md:flex-row flex-col w-full gap-4">
            <div className="flex-1">
              <h3>Provider</h3>
              <div className="flex-1 bg-white rounded-xs border-2 border-gray-400 relative">
                <input
                  type="text"
                  readOnly
                  placeholder="All cities"
                  className="p-1 w-full cursor-pointer focus:ring-0 focus:outline-none"
                />
                <div className="absolute right-2 top-2">
                  <IoMdArrowDropdown size={20} className={``} />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h3>Wallet limit</h3>
              <div className="flex-1 bg-white rounded-xs border-2 border-gray-400 relative">
                <input
                  type="text"
                  readOnly
                  placeholder="All cities"
                  className="p-1 w-full cursor-pointer focus:ring-0 focus:outline-none"
                />
                <div className="absolute right-2 top-2">
                  <IoMdArrowDropdown size={20} className={``} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h3>Provider</h3>
            <textarea
              type="text"
              className="w-full h-25 border-gray-400 flex-1 p-1 border-2 px-2 bg-white rounded-sm"
            />
          </div>
        </div>
      </div>
      <div className="flex-1 w-full m-1 bg-white p-2 rounded-sm">
        <h2 className="font-semibold my-1">DETAILS</h2>
        <div className="flex flex-col items-start my-2 gap-1 p-2 bg-gray-200">
          <div className="flex md:flex-row flex-col gap-4 w-full">
            <div className="flex flex-1 flex-col gap-4 w-full">
              <div className="flex flex-1 flex-col w-full">
                <h3 className="font-semibold text-sm">Name</h3>
                <div className="flex w-full py-2 gap-4">
                  <input
                    type="text"
                    placeholder="account name"
                    className="border-gray-400 flex-1 w-full p-1 border-2 px-2 bg-white rounded-sm"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col w-full">
                <h3 className="font-semibold text-sm">Value</h3>
                <div className="flex w-full py-2 gap-4">
                  <input
                    type="text"
                    placeholder="upi id"
                    className="border-gray-400 flex-1 w-full p-1 border-2 px-2 bg-white rounded-sm"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 w-full">
              <div className="flex flex-1 flex-col w-full">
                <h3 className="font-semibold text-sm">Name</h3>
                <div className="flex w-full py-2 gap-4">
                  <input
                    type="text"
                    placeholder="upi"
                    className="border-gray-400 flex-1 w-full p-1 border-2 px-2 bg-white rounded-sm"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col w-full">
                <h3 className="font-semibold text-sm">Value</h3>
                <div className="flex w-full py-2 gap-4">
                  <input
                    type="text"
                    placeholder=""
                    className="border-gray-400 flex-1 w-full p-1 border-2 px-2 bg-white rounded-sm"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col w-full">
            <h3 className="font-semibold text-sm">Name</h3>
            <div className="flex w-full py-1 gap-4">
              <label className="cursor-pointer border-gray-400 flex-1 w-full p-1 border-2 px-2 bg-white rounded-sm">
                {fileName}
                <input
                  type="file"
                  onChange={handleFileChange}
                  placeholder=""
                  className="hidden"
                />
              </label>
            </div>
          </div>
          <div className="flex flex-1 flex-col w-full">
            <h3 className="font-semibold text-sm">Value</h3>
            <div className="flex w-full py-1 gap-4">
              <input
                type="text"
                placeholder=""
                className="border-gray-400 flex-1 w-full p-1 border-2 px-2 bg-white rounded-sm"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start my-2 gap-1 p-2 bg-gray-200">
          <button className="bg-[#30c1d1] text-white p-2 rounded-md w-full">
            Upload Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default listofbanks;
