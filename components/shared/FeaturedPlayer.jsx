import React from "react";
import Image from "next/image";
import Link from "next/link";

const FeaturedPlayer = () => {
  return (
    <div className="bg-white rounded border shadow">
      <h2 className="text-[#000229] font-bold text-sm  font-redhat p-3">Featured Player</h2>

      <div className="mb-1">
        <div className="rounded  h-[147px] w-full bg-[url('/player.png')] bg-cover bg-center flex flex-col justify-center text-white font-redhat pl-5 text-xs">
          <p className="font-bold">Ebuka Odenigbo</p>
          <p>Forward</p>
        </div>
      </div>

      <div className="text-sm font-redhat">
        <div className="flex justify-between items-center py-1 px-3 border-b">
          <p>School</p>
          <div className="flex gap-3 items-center">
            <h3 className="font-bold text-sm">UNN</h3>
            <Image src="/unn.png" alt="" width={27} height={27} />
          </div>
        </div>
        <div className="flex justify-between items-center py-1 px-3 border-b">
          <p>Apperances</p>
          <p>24</p>
        </div>
        <div className="flex justify-between items-center py-1 px-3 border-b">
          <p>Goals</p>
          <p>10</p>
        </div>
        <div className="flex justify-between items-center py-1 px-3 border-b">
          <p>Assists</p>
          <p>7</p>
        </div>
        <div className="flex justify-between items-center py-1 px-3 border-b">
          <p>Shots</p>
          <p>104</p>
        </div>
      </div>

      <div className="flex justify-end text-sm">
        <div className="flex gap-2 py-2 font-redhat">
          <Link href="#">
            <a>Player Profile</a>
          </Link>
          <Image src="/right-arrow.png" alt="" width={11} height={14} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedPlayer;
