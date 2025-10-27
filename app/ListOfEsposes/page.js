"use client";
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { useState, useEffect, useRef } from "react";

const page = () => {
  const [down, setdown] = useState({
    allref: false,
    agents: false,
    allcont: false,
    group: false,
    cities: false,
    betting: false,
  });

  const [selected, setSelected] = useState({
    allref: "",
    agents: "",
    allcont: "",
    group: "",
    cities: "",
    betting: "",
  });

  const containerRef = useRef(null);

  const [showRemove, setshowRemove] = useState(true);

  const [colset, setcolset] = useState(false);

  //start
  const totalCheckboxes = 24;
  const columns = 5; // number of columns
  const rows = Math.ceil(totalCheckboxes / columns);

  const [checkedItems, setCheckedItems] = useState(
    Array(totalCheckboxes).fill(false)
  );

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setdown({
          allref: false,
          agents: false,
          allcont: false,
          group: false,
          cities: false,
          betting: false,
        });
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const checkval = [
    "EPOS ID",
    "City",
    "Balance (USD)",
    "Full name",
    "Verification",
    "EPOS",
    "Address",
    "Schedule of work",
    "Delete",
    "EPOS blocking date",
    "Finance Group ID",
    "Pre-payment limit",
    "Online",
    "Transaction Period",
    "Date of the last transaction",
    "Finance Group name",
    "Balance",
    "User ID",
    "Device linking",
    "Report",
    "Country",
    "Currency",
    "Username",
    "Balance control",
  ];

  const grid = Array.from({ length: rows }, (_, rowIndex) =>
    Array.from({ length: columns }, (_, colIndex) => {
      const idx = colIndex * rows + rowIndex;
      return idx < totalCheckboxes ? idx : null;
    })
  );

  const toggleshow = (e) => {
    e.stopPropagation();
    setshowRemove(!showRemove);
  };

  const colsetttoggle = (e) => {
    e.stopPropagation();
    setcolset(!colset);
  };

  return (
    <> 
      <div className="bg-white">
        <div className="p-5">
          <h3 className="font-bold">LIST OF Banks</h3>
          <form
            ref={containerRef}
            action=""
            className="flex flex-col gap-3 my-4 p-2 bg-gray-200"
          >
            <div
              className="flex-1 bg-white rounded-xs border-2 border-gray-400 relative"
            >
              <input
                type="text"
                readOnly
                placeholder="All referals"
                value={selected.allref}
                className="p-1 w-full cursor-pointer focus:ring-0 focus:outline-none"
              />
              <div className="absolute right-2 top-2">
                <IoMdArrowDropdown
                  size={20}
                  className={`${down.allref && "rotate-180"}`}
                />
              </div>
              {down.allref && (
                <div
                  onClick={() => {
                    setSelected((prev) => ({ ...prev, allref: "" }));
                    setdown((prev) => ({ ...prev, allref: false }));
                  }}
                  className="absolute w-full top-8 rounded-b-sm p-1 bg-gray-100 px-4 hover:bg-green-500 z-10"
                >

                </div>
              )}
            </div>
            <div className="flex gap-4 flex-col md:flex-row">
              <div
                className="flex-1 bg-white rounded-xs border-2 border-gray-400 relative"
              >
                <input
                  type="text"
                  readOnly
                  placeholder="Agents"
                  value={selected.agents}
                  className="p-1 w-full cursor-pointer focus:ring-0 focus:outline-none"
                />
                <div className="absolute right-2 top-2">
                  <IoMdArrowDropdown
                    size={20}
                    className={`${down.agents && "rotate-180"}`}
                  />
                </div>
                {down.agents && (
                  <div className="absolute w-full top-8 rounded-b-sm p-1 bg-gray-300 z-10">
                    <div
                      onClick={() => {
                        setSelected((prev) => ({ ...prev, agents: "NO" }));
                        setdown((prev) => ({ ...prev, agents: false }));
                      }}
                      className="hover:bg-green-500 px-4"
                    >
                      NO
                    </div>
                    <div
                      onClick={() => {
                        setSelected((prev) => ({ ...prev, agents: "YES" }));
                        setdown((prev) => ({ ...prev, agents: false }));
                      }}
                      className="hover:bg-green-500 px-4"
                    >
                      YES
                    </div>
                  </div>
                )}
              </div>
              <div
                className="flex-1 bg-white rounded-xs border-2 border-gray-400 relative"
              >
                <input
                  type="text"
                  readOnly
                  placeholder="All countries"
                  value={selected.allcont}
                  className="p-1 w-full cursor-pointer focus:ring-0 focus:outline-none"
                />
                <div className="absolute right-2 top-2">
                  <IoMdArrowDropdown
                    size={20}
                    className={`${down.allcont && "rotate-180"}`}
                  />
                </div>
                {down.allcont && (
                  <div className="absolute w-full top-8 rounded-b-sm p-1 bg-gray-100 px-4 hover:bg-green-400 z-10">
                    <div
                      onClick={() => {
                        setSelected((prev) => ({ ...prev, allcont: "" }));
                        setdown((prev) => ({ ...prev, allcont: false }));
                      }}
                      className=""
                    >

                    </div>
                  </div>
                )}
              </div>
              <div
                className="flex-1 bg-white rounded-xs border-2 border-gray-400 relative"
              >
                <input
                  type="text"
                  readOnly
                  placeholder="All financial groups"
                  value={selected.group}
                  className="p-1 w-full cursor-pointer focus:ring-0 focus:outline-none"
                />
                <div className="absolute right-2 top-2">
                  <IoMdArrowDropdown
                    size={20}
                    className={`${down.group && "rotate-180"}`}
                  />
                </div>
                {down.group && (
                  <div className="absolute w-full top-8 rounded-b-sm p-1 px-4 bg-gray-100 hover:bg-green-400 z-10">
                    <div
                      onClick={() => {
                        setSelected((prev) => ({
                          ...prev,
                          group: "",
                        }));
                        setdown((prev) => ({ ...prev, group: false }));
                      }}
                      className=""
                    >

                    </div>
                  </div>
                )}
              </div>
              <div
                className="flex-1 bg-white rounded-xs border-2 border-gray-400 relative"
              >
                <input
                  type="text"
                  readOnly
                  placeholder="All cities"
                  value={selected.cities}
                  className="p-1 w-full cursor-pointer focus:ring-0 focus:outline-none"
                />
                <div className="absolute right-2 top-2">
                  <IoMdArrowDropdown
                    size={20}
                    className={`${down.cities && "rotate-180"}`}
                  />
                </div>
                {down.cities && (
                  <div className="absolute w-full top-8 rounded-b-sm p-1 px-4 bg-gray-100 hover:bg-green-400 z-10">
                    <div
                      onClick={() => {
                        setSelected((prev) => ({
                          ...prev,
                          cities: "",
                        }));
                        setdown((prev) => ({ ...prev, cities: false }));
                      }}
                      className=""
                    >

                    </div>
                  </div>
                )}
              </div>
            </div>
            <div
              className="flex-1 bg-white rounded-xs border-2 border-gray-400 relative"
            >
              <input
                type="text"
                readOnly
                placeholder="All betting shops"
                value={selected.betting}
                className="p-1 w-full cursor-pointer focus:ring-0 focus:outline-none"
              />
              <div className="absolute right-2 top-2">
                <IoMdArrowDropdown
                  size={20}
                  className={`${down.betting && "rotate-180"}`}
                />
              </div>
              {down.betting && (
                <div className="absolute w-full top-8 rounded-b-sm p-1 px-4 bg-gray-100 hover:bg-green-400 z-10">
                  <div
                    onClick={() => {
                      setSelected((prev) => ({
                        ...prev,
                        betting: "",
                      }));
                      setdown((prev) => ({ ...prev, betting: false }));
                    }}
                    className=""
                  >
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-1 text-gray-700 gap-2 items-center">
                <p>Show removed?</p>
                <div
                  onClick={toggleshow}
                  className={`bg-blue-500 w-16 cursor-pointer h-7 flex items-center rounded-full p-1 justify-between ${
                    !showRemove && "flex-row-reverse bg-gray-400"
                  }`}
                >
                  <div className="text-white">{showRemove ? "ON" : "OFF"}</div>
                  <div className="h-full w-6 bg-white rounded-full "></div>
                </div>
              </div>
              <button
                type="button"
                className="flex-1 p-1 bg-blue-500 text-white rounded-sm cursor-pointer"
              >
                Apply
              </button>
            </div>
          </form>
          <div className="bg-gray-200 flex flex-col p-2">
            <div className="flex-1 flex md:flex-row flex-col justify-between">
              <div
                onClick={colsetttoggle}
                className="flex cursor-pointer text-white items-center gap-2 p-2 bg-blue-500 rounded-sm"
              >
                <h4>COLUMN SETTINGS</h4>
                <MdKeyboardDoubleArrowUp
                  className={`${colset ? "" : "rotate-180"}`}
                  size={20}
                />
              </div>
              <div className="flex gap-2 text-white items-center">
                <div className="p-2 bg-blue-300 rounded-sm">CSV</div>
                <div className="p-2 bg-blue-300 rounded-sm">XLS</div>
                <div className="p-2 bg-blue-300 rounded-sm">XLSX</div>
              </div>
            </div>
            {colset && (
              <div className="grid md:grid-cols-5 grid-cols-2 gap-2 bg-white my-2 p-2 w-full">
                {grid.flat().map((index, i) =>
                  index !== null ? (
                    <label
                      key={i}
                      className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100"
                    >
                      <input
                        type="checkbox"
                        readOnly
                        checked={checkedItems[index]}
                        onClick={(e) => e.preventDefault()}
                        className="w-5 h-5 text-blue-500 rounded focus:ring-blue-400"
                      />
                      {checkval[index]}
                    </label>
                  ) : (
                    <div key={i}></div> 
                  )
                )}
              </div>
            )}
          </div>
          <div className="text-center mt-4">No data</div>
        </div>
      </div>
    </>
  );
};

export default page;
