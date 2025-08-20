import React from "react";
import money from "./images/money.png";
import Image from "next/image";
import MoneyShare from "@/components/MoneyShare";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="shadow-xl rounded-2xl p-6 max-w-xl w-full">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Money Share Calculator
        </h1>
        <h3 className="text-xl text-blue-600 mt-4 text-center font-bold">
          คำนวณเงินที่ต้องการหารกัน
        </h3>
        <Image className="mx-auto mt-4 mb-8"
          src={money} alt="Money" width={100} height={100} />
        <MoneyShare />
      </div>
      <h3 className="mt-4 font-bold text-xl">
        Developed by {" "}
        <span className="text-blue-600">
          Tewan DTI SAU TEAM
        </span>
      </h3>
    </div>
  );
}
