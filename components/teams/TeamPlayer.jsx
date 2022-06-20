import React from "react";
import Image from "next/image";
import Link from "next/link";

const TeamPlayer = ({ player }) => {
  return (
    <div className="bg-white rounded border shadow mb-10">
      <div className="mb-1 bg-[url('/team-bg.png')] bg-cover bg-center flex items-center">
        <div className="rounded  h-[147px] w-full mb-4 flex flex-col justify-end text-secondary font-redhat pl-5">
          <p className="font-bold capitalize md:text-lg">
            {player?.User?.Firstname} {player?.User?.Lastname}
          </p>
          <p>{player?.User?.Role}</p>
        </div>
        <div className="flex justify-end h-36 w-48 mr-3 bg-white p-1">
          <img src={player?.DocumentUploads?.PassportPhotograph} alt="picture" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="text-sm font-redhat">
        <div className="flex justify-between items-center py-1 px-3 border-b">
          <p>Position</p>
          <p>{player?.SportRecord?.Position}</p>
        </div>
        <div className="flex justify-between items-center py-1 px-3 border-b">
          <p>Jersey Number</p>
          <p>{player?.SportRecord?.JerseyNumber}</p>
        </div>
      </div>

      {/* <div className="flex justify-end text-sm">
        <Link href="#">
          <a className="flex gap-2 py-2 px-3 font-redhat">
            <span>Player Profile</span>
            <Image src="/right-arrow.png" alt="" width={11} height={14} />
          </a>
        </Link>
      </div> */}
    </div>
  );
};

export default TeamPlayer;
