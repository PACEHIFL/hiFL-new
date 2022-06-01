import Image from "next/image";
import React from "react";

const TeamsHeader = () => {
  return (
    <div className="flex">
      <div>
      <Image src="/about.png" alt="" width="100%" height="40vh" layout="responsive" objectFit="cover" />
      </div>
      <div className="bg-[#7e4275] h-screen">
          <h1>Hello People</h1>
          <h1>Hello People</h1>
      </div>
    </div>
  );
};

export default TeamsHeader;
