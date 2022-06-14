import React from "react";
import Link from "next/link";
import Image from "next/image";

const InnerSection = ({ title, img, parag, lower, arrow, item }) => {
  return (
    <div className="flex align-top mb-5 h-[100%]  flex-wrap ">
      <div className="hidden md:inline w-1/2 h-auto  ">
        <img src={img} alt="" width="100%" height="100%" className="h-full object-cover" />
      </div>
      <div className='w-[90%] md:w-1/2 p-10 lg:pt-6 xl:pt-16 bg-[url("/volunteer-bg.png")] bg-cover bg-right bg-no-repeat mix-blend-darken bg-[#000229] flex flex-col justify-between '>
        <h1 className=" font-bold lg:text-2xl sm:mb-2 sm:text-xl  text-[#F4C316]">{title}</h1>
        <div className=" md:hidden w-100 mb-5">
          <img src={img} alt="" width="100%" height="100%" />
        </div>
        <ul className="sm:my-2 list-disc ml-5 ">
          {item.map(({ list }, ind) => {
            return (
              <li key={ind} className="mb-5">
                {list}
              </li>
            );
          })}
        </ul>
        <Link href="/account">
          <div className=" text-[12px] flex  text-[#F4C316] xl:w-[75%] align-middle justify-between ">
            <div className="sm:w-[90%] p-0 ">{lower}</div>

            <a className="self-center  sm:mt-1  lg:mt-1 xl:m-0  ">
              <img src={arrow} width="100%" height="100%" alt="" />
            </a>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default InnerSection;
