"use client";
import { ArrowLeft, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function TopBar() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="flex justify-between items-center px-4 pt-4">
      <div className="flex items-center">
        <Link
          href="/"
          className="text-[#FFFFFF99] text-small w-11 h-11 flex items-center justify-center rounded-full bg-[#0C0C0C]   border border-[#3E3E3E]"
        >
          <ArrowLeft size={18} color="white" />
        </Link>
        <span className="text-white font-semibold ms-3">NC833</span>
      </div>
      <div className="flex items-center gap-4 text-[#C1C1C1]">
        <div className="flex items-center border   border-[#4B505C] rounded pe-2 cursor-pointer">
          <DatePicker
            showIcon
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MMM yyyy" // <-- This formats date as "Jan 2025"
            showMonthYearPicker     // Optional: lets user pick month & year only
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 48 48"
              >
                <mask id="ipSApplication0">
                  <g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="4">
                    <path strokeLinecap="round" d="M40.04 22v20h-32V22"></path>
                    <path
                      fill="#fff"
                      d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                    ></path>
                  </g>
                </mask>
                <path
                  fill="currentColor"
                  d="M0 0h48v48H0z"
                  mask="url(#ipSApplication0)"
                ></path>
              </svg>
            }
          />
             <ChevronDown size={16}/>
        </div>
        <div className="flex items-center gap-1 border border-[#00A65366] px-4 py-2 rounded ">
          <Image
            src={"/svg/graph.svg"}
            width={50}
            height={50}
            alt="graph"
            className="w-fit"
          />
          <span className="text-[#00A653] text-[14px] font-medium">
            View Current Month ERP
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
