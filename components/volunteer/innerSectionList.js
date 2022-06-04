import React from "react";
import Image from "next/dist/client/image";
import Link from "next/link";

const InnerSectionList = ({  img, title, list1, list2, list3 }) => {
  return (
    <div className="flex align-top mb-5 h-[100%] ">
      <div className="hidden md:inline w-1/2">
        <img src={img} alt="" width="100%" className="h-full" />
      </div>
      <div className='w-100 md:w-1/2 p-10 lg:pt-6 xl:pt-16 bg-[url("/volunteer-bg.png")] bg-cover bg-right bg-no-repeat mix-blend-darken bg-[#000229] flex flex-col justify-between '>
        <h1 className=" font-bold lg:text-2xl sm:mb-2 sm:text-xl  text-[#F4C316]">{title}</h1>
        <div className=" md:hidden w-100">
          <img src={img} alt="" width="100%" className="h-full" />
        </div>
        <ul className="sm:my-2 list-disc ml-5 ">
          <li>{list1}</li>
          <li>{list2}</li>
          <li>{list3}</li>
        </ul>
        <div></div>
        
      </div>
    </div>
  );
};

export default InnerSectionList;
