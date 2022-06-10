import Image from "next/image";
import React from "react";

const TeamsHeader = ({ data }) => {
  return (
    <div className="flex h-full bg-[#000229] text-white font-redhat">
      <div className="hidden lg:block w-[50%] h-full border-r border-r-white rounded-br-[3rem]">
        {/* <Image src="/about.png" alt="" width="100%" height="100%" layout="fixed" objectFit="contain" /> */}
        <img src="/about.png" alt="" className="object-contain w-full h-full rounded-br-[3rem]" />
      </div>

      <div className="flex flex-col lg:flex-row w-full items-center lg:justify-center lg:w-[50%] py-10">
        <div className="bg-white p-2 rounded-full">
          <Image src="/futa-logo.png" alt="" layout="intrinsic" width="200%" height="200%" className="" />
        </div>
        <div className="lg:ml-6 text-center lg:text-left justify-center lg:justify-start mt-6">
          <h1 className="text-5xl font-extrabold">{data.TeamName}</h1>
          <div className="flex items-center my-4">
            <Image className="hidden" src="/school-icon.png" alt="school-icon" width="20" height="20" layout="fixed" />
            <span className="pl-3 font-bold">{data?.Institution?.Location}</span>
          </div>
          <div className="flex items-center justify-center lg:justify-start mb-4">
            <Image
              className="hidden"
              src="/profile-user.png"
              alt="profile-user"
              width="20"
              height="20"
              layout="fixed"
            />
            <span className="pl-3 font-bold">4 HiFL Appereance</span>
          </div>
          <div className="flex items-center -ml-1 justify-center lg:justify-start">
            <Image src="/facebook.png" alt="" width="60" className="cursor-pointer mr-3" height="60" layout="fixed" />
            <Image src="/twitter.png" alt="" width="60" className="cursor-pointer mr-3" height="60" layout="fixed" />
            <Image src="/instagram.png" alt="" width="60" className="cursor-pointer mr-3" height="60" layout="fixed" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsHeader;
