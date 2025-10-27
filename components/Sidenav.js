"use client";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineLogout } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { CgOrganisation } from "react-icons/cg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { FaAngleDown } from "react-icons/fa6";
import Link from "next/link";
import { jwtDecode } from "jwt-decode";

export default function SidebarLayout({ children }) {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const decoded = token ? jwtDecode(token) : null;
  const router = useRouter();
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [hamburgerclick, sethamburgerclick] = useState(true);
  const [settingclick, setsettingclick] = useState(false);
  const [epose, setepose] = useState(true);
  const [list, setlist] = useState(false);
  const [prepay, setprepay] = useState(false);
  const [deposit, setdeposit] = useState(false);
  const [depositreq, setdepositreq] = useState(false);
  const [pendingdepreq, setpendingdepreq] = useState(false);
  const [pendingreq, setpendingreq] = useState(false);
  const [withdrawalreq, setwithdrawalreq] = useState(false);
  const sidebarRef = useRef(null);
  console.log(pathname);

  useEffect(() => {
    if (pathname === "/banktransfer" || pathname === "/Listofbanks") {
      handleeposechange();
    } else if (pathname === "/Depositrequest") {
      handledepositreqchange();
    } else if (pathname === "/Pendingdepositrequest") {
      handlependingdepreqchange();
    } else if (pathname === "/withdrawalrequest") {
      handlewithdrawalreqchange();
    } else if (pathname === "/Pendingwithdrawalrequest") {
      handlependingwithreqchange();
    } else if (
      pathname === "/Pre-payment_structure" ||
      pathname === "/AddMoney"
    ) {
      handleprepaychange();
    } else if (pathname === "/Deposit_history") {
      handledepositchange();
    } else {
      nothingselected();
    }
    if (pathname === "/dashboard") {
      sethamburgerclick(true);
    }
  }, [pathname]);

  const hideSidebar = pathname === "/";

  const hamclick = () => {
    sethamburgerclick(true);
    setsettingclick(false);
  };
  const logclick = async () => {
    try {
      const res = await fetch("/api/logout", { method: "POST" });
      const data = await res.json();

      if (data.success) {
        sethamburgerclick(false);
        setsettingclick(false);
        router.push("/");
      }
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const nothingselected = () => {
    setdeposit(false);
    setprepay(false);
    setlist(false);
    setpendingdepreq(false);
    setwithdrawalreq(false);
    setpendingreq(false);
    setdepositreq(false);
  };

  const handleeposechange = () => {
    setlist(true);
    setprepay(false);
    setdeposit(false);
    setpendingdepreq(false);
    setwithdrawalreq(false);
    setpendingreq(false);
    setdepositreq(false);
  };
  const handleprepaychange = () => {
    setprepay(true);
    setlist(false);
    setdeposit(false);
    setpendingdepreq(false);
    setwithdrawalreq(false);
    setpendingreq(false);
    setdepositreq(false);
  };
  const handledepositchange = () => {
    setdeposit(true);
    setprepay(false);
    setlist(false);
    setpendingdepreq(false);
    setwithdrawalreq(false);
    setpendingreq(false);
    setdepositreq(false);
  };
  const handledepositreqchange = () => {
    setdepositreq(true);
    setdeposit(false);
    setprepay(false);
    setlist(false);
    setwithdrawalreq(false);
    setpendingreq(false);
    setpendingdepreq(false);
  };
  const handlependingdepreqchange = () => {
    setpendingdepreq(true);
    setdepositreq(false);
    setdeposit(false);
    setprepay(false);
    setlist(false);
    setwithdrawalreq(false);
    setpendingreq(false);
  };
  const handlewithdrawalreqchange = () => {
    setwithdrawalreq(true);
    setdepositreq(false);
    setdeposit(false);
    setprepay(false);
    setlist(false);
    setpendingdepreq(false);
    setpendingreq(false);
  };
  const handlependingwithreqchange = () => {
    setpendingreq(true);
    setdepositreq(false);
    setdeposit(false);
    setprepay(false);
    setlist(false);
    setwithdrawalreq(false);
    setpendingdepreq(false);
  };

  if (hideSidebar) {
    return <div className="h-screen w-screen">{children}</div>;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <div
        ref={sidebarRef}
        className={`text-gray-300 h-screen absolute md:relative md:block transition-all duration-300 flex flex-col
        ${collapsed ? "w-10 transparent" : "w-70 bg-gray-100  z-10"}`}
      >
        <div className="flex justify-end items-center bg-black">
          <div
            className={`flex justify-center items-center px-5 p-4 ${
              collapsed ? "hidden" : "block"
            }`}
          >
            <Image src="/logo.svg" alt="Logo" width={200} height={150} />
          </div>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="py-5 p-1 bg-gray-600 hover:bg-gray-800 w-10 cursor-pointer"
          >
            {collapsed ? (
              <MdKeyboardDoubleArrowRight className="text-white " size={30} />
            ) : (
              <MdKeyboardDoubleArrowRight
                className="text-white rotate-180"
                size={30}
              />
            )}
          </button>
        </div>
        <div
          className={`flex items-center justify-between bg-gray-500 ${
            collapsed && "hidden"
          }`}
        >
          <div
            className={`flex-1 py-2 cursor-pointer ${
              hamburgerclick && "bg-gray-100"
            }`}
            onClick={hamclick}
          >
            <RxHamburgerMenu className="w-23 text-[#30c1d1]" size={30} />
          </div>
          <div
            className={`flex-1 flex  py-2 cursor-pointer`}
            onClick={logclick}
          >
            <HiOutlineLogout className="w-23 text-[#30c1d1]" size={30} />
          </div>
        </div>
        {hamburgerclick && !collapsed && (
          <div className="">
            <div className="flex justify-start items-center p-2">
              <div className="p-1">
                <IoSearch className="text-[#30c1d1]" size={25} />
              </div>
              <h3 className="text-gray-500 font-semibold">REPORTS</h3>
            </div>
            <div className="border" />
            <div
              className="flex justify-between items-center p-1 bg-[#30c1d1] relative"
              onClick={() => {
                setepose(!epose);
              }}
            >
              <div
                className={`absolute h-4 w-4 z-10 bg-[#30c1d1] rotate-45 top-10 left-5 ${
                  !epose && "hidden"
                }`}
              />
              <div className="flex items-center">
                <div className="p-2">
                  <CgOrganisation className="" size={25} />
                </div>
                <h3 className="text-black font-bold">BANK TRANSFER</h3>
              </div>
              <div className="px-2 cursor-pointer">
                <FaAngleDown className={`${epose && "rotate-180"}`} size={20} />
              </div>
            </div>
            {epose && (
              <div className="text-black flex flex-col gap-4 py-2 overflow-y-hidden pl-6 relative">
                <div className="absolute left-7 w-[0.5px] h-80  bg-black" />
                <div className="flex items-center gap-4 relative">
                  <div
                    className={`outer-circle absolute h-4 w-4 right-61 ${
                      list && "border-2 border-[#30c1d1]"
                    } rounded-full`}
                  />
                  <div className="h-2 w-2 rounded-full bg-black z-10" />
                  <Link href={"/banktransfer"} onClick={handleeposechange}>
                    <div className={`${list && "text-[#30c1d1]"}`}>
                      List of Banks
                    </div>
                  </Link>
                </div>
                <div className="flex items-center gap-4 relative">
                  <div
                    className={`outer-circle absolute h-4 w-4 right-61 ${
                      depositreq && "border-2 border-[#30c1d1]"
                    } rounded-full`}
                  />
                  <div className="h-2 w-2 rounded-full bg-black z-10" />
                  <Link
                    href={"/Depositrequest"}
                    onClick={handledepositreqchange}
                  >
                    <div className={`${depositreq && "text-[#30c1d1]"}`}>
                      Deposit requests
                    </div>
                  </Link>
                </div>
                <div className="flex items-center gap-4 relative">
                  <div
                    className={`outer-circle absolute h-4 w-4 right-61 ${
                      pendingdepreq && "border-2 border-[#30c1d1]"
                    } rounded-full`}
                  />
                  <div className="h-2 w-2 rounded-full bg-black z-10" />
                  <Link
                    href={"/Pendingdepositrequest"}
                    onClick={handlependingdepreqchange}
                  >
                    <div className={`${pendingdepreq && "text-[#30c1d1]"}`}>
                      Pending deposit requests
                    </div>
                  </Link>
                </div>
                <div className="flex items-center gap-4 relative">
                  <div
                    className={`outer-circle absolute h-4 w-4 right-61 ${
                      withdrawalreq && "border-2 border-[#30c1d1]"
                    } rounded-full`}
                  />
                  <div className="h-2 w-2 rounded-full bg-black z-10" />
                  <Link
                    href={"/withdrawalrequest"}
                    onClick={handlewithdrawalreqchange}
                  >
                    <div className={`${withdrawalreq && "text-[#30c1d1]"}`}>
                      Withdrawal requests
                    </div>
                  </Link>
                </div>
                <div className="flex items-center gap-4 relative">
                  <div
                    className={`outer-circle absolute h-4 w-4 right-61 ${
                      pendingreq && "border-2 border-[#30c1d1]"
                    } rounded-full`}
                  />
                  <div className="h-2 w-2 rounded-full bg-black z-10" />
                  <Link
                    href={"/Pendingwithdrawalrequest"}
                    onClick={handlependingwithreqchange}
                  >
                    <div className={`${pendingreq && "text-[#30c1d1]"}`}>
                      Pending Withdrawal requests
                    </div>
                  </Link>
                </div>
                <div className="flex items-center gap-4 relative">
                  <div
                    className={`outer-circle absolute h-4 w-4 right-61 ${
                      prepay && "border-2 border-[#30c1d1]"
                    } rounded-full`}
                  />
                  <div className="h-2 w-2 rounded-full bg-black" />
                  <Link
                    href={"/Pre-payment_structure"}
                    onClick={handleprepaychange}
                  >
                    <div className={`${prepay && "text-[#30c1d1]"}`}>
                      Pre-payment structure
                    </div>
                  </Link>
                </div>
                <div className="flex items-center gap-4 relative">
                  <div
                    className={`outer-circle absolute h-4 w-4 right-61 ${
                      deposit && "border-2 border-[#30c1d1]"
                    } rounded-full`}
                  />
                  <div className="h-2 w-2 rounded-full bg-black" />
                  <Link href={"/Deposit_history"} onClick={handledepositchange}>
                    <div className={`${deposit && "text-[#30c1d1]"}`}>
                      Deposit history
                    </div>
                  </Link>
                </div>
              </div>
            )}
            <div className="border" />
          </div>
        )}
      </div>
      <div className="flex-1 flex bg-gray-300 flex-col">
        <Navbar />
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
