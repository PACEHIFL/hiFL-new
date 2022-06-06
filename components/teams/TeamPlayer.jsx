import React from "react";
import Image from "next/image";
import Link from "next/link";

const TeamPlayer = () => {
  return (
    <div className="bg-white rounded border shadow">
      <div className="mb-1 bg-[url('/team-bg.png')] bg-cover bg-center flex">
        <div className="rounded  h-[147px] w-full mb-4 flex flex-col justify-end text-secondary font-redhat pl-5 text-xs">
          <p className="font-bold">Ebuka Odenigbo</p>
          <p>Forward</p>
        </div>
        <div className="flex justify-end">
          <Image src="/jersey.png" width="250" alt="" height="180" layout="intrinsic" />
        </div>
      </div>

      <div className="text-sm font-redhat">
        <div className="flex justify-between items-center py-1 px-3 border-b">
          <p>Apperances</p>
          <p>24</p>
        </div>
        <div className="flex justify-between items-center py-1 px-3 border-b">
          <p>Goals</p>
          <p>10</p>
        </div>
      </div>

      <div className="flex justify-end text-sm">
        <Link href="#">
          <a className="flex gap-2 py-2 px-3 font-redhat">
            <span>Player Profile</span>
            <Image src="/right-arrow.png" alt="" width={11} height={14} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default TeamPlayer;
