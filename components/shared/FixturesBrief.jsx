import React from "react";
import Image from "next/image";
import Link from "next/link";

const FixturesBrief = () => {
  const fixtures = [
    { img1: "/unn.png", school1: "UNN", time: "4:00", img2: "/futmina.png", school2: "FUT" },
    { img1: "/futmina.png", school1: "FUT", time: "6:00", img2: "/unn.png", school2: "UNN" },
    { img1: "/unn.png", school1: "UNN", time: "8:00", img2: "/futmina.png", school2: "FUT" },
    { img1: "/futmina.png", school1: "FUT", time: "4:00", img2: "/unn.png", school2: "UNN" },
  ];
  return (
    <div className="bg-white h-full border-[5px] text-black font-redhat text-center border-x-0 border-primary flex justify-center p-5">
      <div>
        <h2 className="text-accent text-md font-bold">Round of 16</h2>
        <h2 className="text-[#000229] text-md font-bold p-5">Wednesday 29 September</h2>
        <div className="">
          {fixtures.map(({ img1, school1, time, img2, school2 }, i) => (
            <div
              className="flex gap-4 items-center py-5 border-[0.5px] border-[#BFBFBF] border-b border-x-0 border-t-0"
              key={i}>
              <div className="flex gap-3 items-center">
                <h3 className="font-bold text-sm">{school1}</h3>
                <img src={img1} alt="" className="w-[35px] h-[35px]" />
              </div>
              <p className="border border-[#CBCBCB] px-4 py-1 text-sm">{time}</p>
              <div className="flex gap-3 items-center">
                <img src={img2} alt="" className="w-[35px] h-[35px]" />
                <h3 className="font-bold text-sm">{school2}</h3>
              </div>
            </div>
          ))}
          <div className="flex justify-end">
            <div className="flex gap-2 items-center mt-4">
              <Link href="/fixtures">
                <a>View All</a>
              </Link>
              <div>
                <img src="/right-arrow.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixturesBrief;
