import React from "react";
import Image from "next/image";

const FixturesCard = () => {
  return (
    <div className="mb-20">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-secondary font-bold text-2xl">22 April, 2022</h1>
        <span>Quaterfinal | Second leg</span>
      </div>
      <div className="text-secondary w-full flex items-center justify-between hover:bg-primary border-y p-3 hover:text-white">
        <div className="flex items-center justify-center ml-10">
          <div className="flex justify-center items-center">
            <span className="font-bold text-xl">FUTA Tigers</span>
            <img src="/futa-logo.png" className="w-12 h-12" alt="futa-logo" />
          </div>
          <div className="bg-white border border-gray-400 px-3 py-1 mx-8">
            <span className="text-secondary">4:00</span>{" "}
          </div>
          <div className="flex justify-center items-center">
            <img src="/futa-logo.png" className="w-12 h-12" alt="futa-logo" />
            <span className="font-bold text-xl">FUTA Tigers</span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-x-96">
          <div className="flex items-center">
            <img src="/location.png" className="w-8" alt="location icon" />
            <span className="font-bold text-xl">UNN Sports Complex, Nsukka</span>
          </div>
          <Image src="/right-arrow.png" alt="" width={11} height={14} />
        </div>
      </div>
    </div>
  );
};

export default FixturesCard;
