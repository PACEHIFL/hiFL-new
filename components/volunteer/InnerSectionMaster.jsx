import React from "react";
import Link from "next/link";
import Image from "next/image";

const InnerSectionMaster = ({ title, img, parag, name, designation, date, link }) => {
  return (
    <div className="flex align-top mb-5">
      {/* <div className="text-black xxl:w-[30%] relative  max-h-fit flex flex-col justify-between border-b border-l p-0 "> */}
      <div className="text-black xxl:w-[30%] relative  max-h-fit border-b border-l p-0 ">
        <div className="hidden xxl:inline w-[100%] h-[100%]   ">
          <img src={img} alt="" height="100%" width="100%" className=" w-full h-[100%] object-cover " />
        </div>
        <div className="hidden  xxl:flex flex-col  p-3 pb-0 xxl:pb-3 absolute bottom-0 text-white bg-[#000229BA] shadow-xl w-full  xxl:justify-top ">
          <p className="font-bold text-lg text-[#F4C316]">{name}</p>
          <p className="font text-sm">{designation}</p>
        </div>
      </div>

      <div className='w-100 xxl:w-[70%] m-0 p-10 lg:pt-6 xxl:pt-10  flex flex-col align-top justify-start bg-[url("/volunteer-bg.png")] bg-cover bg-right bg-no-repeat mix-blend-darken bg-[#000229]'>
        <p className="md:mb-5 text-white">{date}</p>
        <h1 className=" font-bold xl:text-xl sm:mb-2 sm:text-md  text-[#F4C316]">{title}</h1>
        <div className=" xxl:hidden w-100  h-auto mb-3 ">
          <img src={img} alt="" height="70%" layout="responsive" className="w-[30%] md:w-[25%] " />
        </div>
        <div className="xxl:hidden  flex flex-col text-[#F4C316]  h-fit ">
          <p>{name}</p>
          <p>{designation}</p>
        </div>
        <p className="sm:my-2 sm:mt-0 text-white  ">{parag}</p>
        <Link href={`${link}`}>
          <div className=" text-[12px] flex  text-[#F4C316] cursor-pointer  align-middle justify-between ">
            <p className="">View Session</p>
            <a className="self-center  sm:mt-1  lg:mt-1 xl:m-0  ">
              <img src="/arrow 1.png" width="100%" height="100%" alt="" />
            </a>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default InnerSectionMaster;
