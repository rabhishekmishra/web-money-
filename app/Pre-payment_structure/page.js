"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Page() {
  const [amount, setAmount] = useState("0");

  useEffect(() => {
    const fetchAmount = async () => {
      const res = await fetch("/api/me");
      const data = await res.json();
      if (data.success) setAmount(data.amount);
    };
    fetchAmount();
  }, []);

  return (
    <div className="bg-white p-5">
      <h3 className="font-semibold">AVAILABLE BALANCE</h3>
      <div className="text-2xl font-bold">₹{amount}</div>
      <div className="bg-gray-200 my-3 p-5">
        <Link href="/AddMoney">
          <button className="bg-[#30c1d1] p-2 md:w-xs w-full cursor-pointer rounded-xl font-bold shadow-md shadow-gray-100">
            Add Money
          </button>
        </Link>
      </div>
    </div>
  );
}
