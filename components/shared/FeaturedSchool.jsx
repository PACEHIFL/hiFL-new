import React from "react";
import Image from "next/image";
import Link from "next/link";

const FeaturedSchool = () => {
  return (
    <div className="bg-white rounded border shadow">
      <h2 className="text-[#000229] font-bold text-sm  font-redhat p-3">Featured School</h2>

      <div className="mb-1">
        <div className="rounded  h-[147px] w-full bg-[url('/sch.png')] bg-cover bg-top flex flex-col justify-center text-white font-redhat pl-5 text-xs">
          {/* <p className="font-bold">Allen Eduviere</p>
          <p>Coach</p> */}
        </div>
      </div>

      <div className="text-sm font-redhat">
        <div className="flex justify-between items-center py-1 px-3 border-b">
          <p>School</p>
          <div className="flex gap-3 items-center">
            <h3 className="font-bold text-sm">University of Lagos</h3>
            <Image src="/unn.png" alt="" width={27} height={27} />
          </div>
        </div>
        <div className="flex justify-between items-center py-1 px-3 border-b">
          <p>Apperances</p>
          <p>10</p>
        </div>
        <div className="flex justify-between items-center py-1 px-3 border-b">
          <p>Goals</p>
          <p>10</p>
        </div>
        <div className="flex justify-between items-center py-1 px-3 border-b">
          <p>Location</p>
          <p>Lagos, Nigeria</p>
        </div>
        <div className="flex justify-between items-center py-1 px-3 border-b">
          <p>Shots</p>
          <p>104</p>
        </div>
      </div>

      <div className="flex justify-end text-sm">
        <Link href="#">
          <a className="flex gap-2 py-2 px-3 font-redhat">
            <span>School Profile</span>
            <Image src="/right-arrow.png" alt="" width={11} height={14} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedSchool;
