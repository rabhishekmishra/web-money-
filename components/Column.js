"use client";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { useState } from "react";

import React from "react";

const Column = () => {
  const [colset, setcolset] = useState(false);

  const totalCheckboxes = 24;
  const columns = 5; // number of columns
  const rows = Math.ceil(totalCheckboxes / columns);

  const [checkedItems, setCheckedItems] = useState(
    Array(totalCheckboxes).fill(false)
  );

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
  const colsetttoggle = (e) => {
    e.stopPropagation();
    setcolset(!colset);
  };
  return (
    <div className="bg-gray-200 flex flex-col p-2">
      <div className="flex-1 gap-2 flex flex-row md:justify-between w-full ">
        <div
          onClick={colsetttoggle}
          className="flex cursor-pointer text-[12px] md:text-sm text-white items-center gap-2 p-2 bg-[#30c1d1] rounded-sm"
        >
          <h4>COLUMN SETTINGS</h4>
          <MdKeyboardDoubleArrowUp
            className={`${colset ? "" : "rotate-180"}`}
            size={20}
          />
        </div>
        <div className="flex w-full flex-1 gap-2 text-white  md:float-end justify-end items-center">
          <div className="md:p-2 p-1 text-[12px] md:text-sm bg-[#30c1d1] opacity-60 rounded-sm">CSV</div>
          <div className="md:p-2 p-1 text-[12px] md:text-sm bg-[#30c1d1] opacity-60 rounded-sm">XLS</div>
          <div className="md:p-2 p-1 text-[12px] md:text-sm bg-[#30c1d1] opacity-60 rounded-sm">XLSX</div>
        </div>
      </div>
      {colset && (
        <div className="grid md:grid-cols-5 grid-cols-1 gap-2 bg-white my-2 p-2 w-full">
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
                  // onChange={() => handleChange(index)}
                  onClick={(e) => e.preventDefault()}
                  className="w-5 h-5 text-blue-500 rounded focus:ring-blue-400"
                />
                {checkval[index]}
              </label>
            ) : (
              <div key={i}></div> // empty cell for alignment
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Column;
