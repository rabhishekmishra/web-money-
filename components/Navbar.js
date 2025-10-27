"use client";
import React from "react";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ children }) => {
  const [contryLang, setcontryLang] = useState(false)
  const pathname = usePathname().replace("/", " / ").replace("banktransfer", " Bank Transfer").replace("Depositrequest", " Deposit Request").replace("Pendingdepositrequest", " Pending Deposit Request").replace("withdrawalrequest", " Withdrawal Request").replace("Pendingwithdrawalrequest", " Pending Withdrawal Request").replace("Pre-payment_structure", " Pre-payment Structure").replace("Deposit_history", " Deposit History").replace("Listofbanks", " List of Banks").replace("AddMoney", " Add Money");
  const hideSidebar = pathname === "/";
  if (hideSidebar) {
    return <div className="h-screen w-screen">{children}</div>;
  }
  return (
    <>
      <nav className="h-auto ml-8 md:ml-1 pt-5  text-black flex justify-between items-center px-4">
        <div><Link href="/dashboard">Home page</Link>{pathname===" / dashboard" ? "" :pathname }</div>
        <div>
          <div
            onClick={() => setcontryLang(!contryLang)}
            className="flex justify-between w-full cursor-pointer relative"
          >
            <Image src="/flag.jpeg" alt="Country Flag" width={25} height={25} className="rounded-full mx-2 cursor-pointer"/>
            <div className="text-black font-bold">EN</div>
              <IoIosArrowDown className="text-black text-2xl" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
