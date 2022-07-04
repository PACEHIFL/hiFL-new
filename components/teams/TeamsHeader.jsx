import Image from "next/image";
import React from "react";
import { BeatLoader } from "react-spinners";

const TeamsHeader = ({ data, loading }) => {
  return (
    <div className="flex h-full bg-[#000229] text-white font-redhat">
      <div className="flex flex-col lg:flex-row w-full items-center lg:justify-center lg:w-[50%] py-10">
        <div className="bg-white rounded-full mx-10 h-48 w-48 border-2 border-white">
          <img
            src={data?.TeamLogo ? data?.TeamLogo : "/default-team-logo.png"}
            alt=""
            className="max-w-full h-full rounded-full"
          />
        </div>
        <div className="lg:ml-6 text-center lg:text-left justify-center lg:justify-start mt-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">{data?.TeamName}</h1>
          <div className="flex items-center  justify-center lg:justify-start my-4">
            <img className="hidden md:inline" src="/school-icon.png" alt="school-icon" width="20" height="20" />
            <span className="pl-3 font-bold">{data?.Institution?.Location}</span>
          </div>
          <div className="flex items-center justify-center lg:justify-start mb-4">
            {/* <img className="hidden md:inline" src="/profile-user.png" alt="profile-user" width="20" height="20" /> */}
            {/* <span className="pl-3 font-bold">4 HiFL Appereance</span> */}
          </div>
          <div className="flex items-center -ml-1 justify-center lg:justify-start">
            <Image src="/facebook.png" alt="" width="60" className="cursor-pointer mr-3" height="60" layout="fixed" />
            <Image src="/twitter.png" alt="" width="60" className="cursor-pointer mr-3" height="60" layout="fixed" />
            <Image src="/instagram.png" alt="" width="60" className="cursor-pointer mr-3" height="60" layout="fixed" />
          </div>
        </div>
      </div>
      <div className="hidden lg:block w-[50%] h-full border-r border-r-white">
        {/* <Image src="/about.png" alt="" width="100%" height="100%" layout="fixed" objectFit="contain" /> */}
        <img src={data?.TeamCoverPhoto ? data?.TeamCoverPhoto : ""} className="object-contain w-full h-full" />
      </div>
    </div>
  );
};

export default TeamsHeader;
