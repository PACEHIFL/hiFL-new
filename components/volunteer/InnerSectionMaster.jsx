import React from "react";
import Link from "next/link";
import Image from "next/image";

const InnerSectionMaster = ({ title, img, parag, name, designation, date }) => {
  return (
    <div className="flex align-top mb-5">
      <div className="text-black w-[30%]   max-h-fit  ">
        {/* <div className="text-black w-[30%]   max-h-fit self-center "> */}
        <div className="hidden md:inline w-[100%] mt-10  ">
          <img
            src={img}
            alt=""
            layout="responsive"
            height="100%"
            width="100%"
            className=" w-full h-fit object-cover "
          />
          {/* <div className="hidden absolute md:flex flex-col p-3 pb-0 h-fit">
            <p>{name}</p>
            <p>{designation}</p>
          </div> */}
        </div>
        <div className="hidden  md:flex flex-col p-3 pb-0 h-fit">
          <p>{name}</p>
          <p>{designation}</p>
        </div>
      </div>

      <div className='w-100 md:w-[70%] p-10 lg:pt-6 xl:pt-16  flex flex-col justify-start bg-[url("/volunteer-bg.png")] bg-cover bg-right bg-no-repeat mix-blend-darken bg-[#000229]'>
        <p className="md:mb-5">{date}</p>
        <h1 className=" font-bold lg:text-xl sm:mb-2 sm:text-md  text-[#F4C316]">{title}</h1>
        <div className=" md:hidden w-100  h-auto mb-3 ">
          <img src={img} alt="" width="70%" height="70%" layout="responsive" className="" />
        </div>
        <div className="md:hidden  flex flex-col text-[#F4C316]  h-fit">
          <p>{name}</p>
          <p>{designation}</p>
        </div>
        <p className="sm:my-2 sm:mt-0  ">{parag}</p>
        <div className=" text-[12px] flex  text-[#F4C316]  align-middle justify-between "></div>
      </div>
    </div>
  );
};

export default InnerSectionMaster;
