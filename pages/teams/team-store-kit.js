import React from "react";
import LatestVideos from "../../components/shared/LatestVideos";
import Link from "next/dist/client/link";
import Image from "next/dist/client/image";

const TeamStorekit = () => {
  let kit = [
    { name: "2022 AUTHENTIC HOME JERSEY", amount: "#6500", image: "/red-jersey.png" },
    { name: "2022 AUTHENTIC HOME JERSEY", amount: "#6500", image: "/red-jersey.png" },
    { name: "2022 AUTHENTIC HOME JERSEY", amount: "#6500", image: "/red-jersey.png" },
  
  ];
  let newSection = [
    {
      Image: "/news.png",
      Header: "Latest News",
      Title: "HiFL 2021: Unimaid Desert Warriors  AAUA Luminaries qualify for finals",
      Newscut: "HiFL 2021: Unimaid Desert Warriors, AAUA Luminaries qualify for finals",
    },
    {
      Image: "/news.png",
      Header: "Latest News",
      Title: "Unimaid beat Futminna 1-0 as UNN walk tight rope",
      Newscut: "HiFL 2021: Unimaid Desert Warriors, AAUA Luminaries qualify for finals",
    },
    {
      Image: "/news.png",
      Header: "Latest News",
      Title: "Unimaid beat Futminna 1-0 as UNN walk tight rope",
      Newscut: "HiFL 2021: Unimaid Desert Warriors, AAUA Luminaries qualify for finals",
    },
    
  ];

  let brand = [];
  return (
    <div className=" mx-16 text-black mt-10 lg:mt-0 font-redhat">
      <div>
        <div className="flex  justify-center md:justify-end">
          <div className="p-3 mb-16 flex justify-start align-middle rounded w-60 h-11 bg-[#000229] text-white float-right">
            KIT
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-start flex-wrap">
          {kit.map((val, ind) => {
            return (
              <div className="flex flex-col align-middle text-center mb-12  " key={ind}>
                <ul className="flex  flex-col align-middle text-center    ">
                  <li className="self-center">
                    <img src={val.image} alt="" />
                  </li>
                  <li className="w-2/5 self-center font-bold ">{val.name}</li>
                  <li className="mt-3 font-bold">{val.amount}</li>
                </ul>
                <div className="flex mt-3 justify-center   ">
                  <button className="bg-[#000229] text-white p-2 mr-1 flex align-middle justify-center">
                    <span className="mr-4"><img src="/Buy.png" alt="" /></span>
                    <span>Buy Now</span>
                  </button>
                  <button className="text-[#000229] border-2 border-[#D0D0D0] p-2 flex align-middle justify-center  ">
                    <span className=" mr-4"><img src="/love.png" alt=""/></span>
                    <span >Add to wishlist</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lg:w-[85%]">
      <div className="flex justify-between items-center py-2 border-t border-[#D0D0D0] pt-6 mt-8 ">
        <h2 className="text-[#000229] font-bold text-lg font-redhat py-3">Latest News</h2>
        <Link href="/news">
          <a className="flex gap-2 text-sm font-bold">
            <span>Read More</span>
            <Image src="/right-arrow.png" alt="" width={11} height={14} />
          </a>
        </Link>
      </div>
        
        <div className="md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6  ">
          {newSection.map((val, ind) => {
            return (
              <div className="flex flex-col align-top mr-2 mb-6" key={ind}>
                <img src={val.Image} alt="" />
                <p className="text-[#EA1D24] font-bold">{val.Header}</p>
                <h1 className="text-1xl font-bold">{val.Title}</h1>
                <p>{val.Newscut}</p>
              </div>
            );
          })}
        </div>

        <LatestVideos />
        
      </div>
    </div>
  );
};

export default TeamStorekit;
