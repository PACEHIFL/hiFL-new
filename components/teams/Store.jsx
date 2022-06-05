import React, { useState } from "react";
import LatestNews from "../shared/LatestNews";
import LatestVideos from "../shared/LatestVideos";
import Sponsors from "../shared/Sponsors";
import Kits from '../../components/teams/Kits';

const storeItems = ["Kit", "Equipment", "Wearables"];
const kitDetails = [
  {
      kitName: "2022 Authentic Home Jersey",
      price: "6500",
      image: "/main-jersey.png"
  },
  {
      kitName: "2022 Authentic Home Jersey",
      price: "6500",
      image: "/main-jersey.png"
  },
  {
      kitName: "2022 Authentic Home Jersey",
      price: "6500",
      image: "/jersey-back.png"
  },
]

const equipmentDetails = [
  {
      kitName: "HiFL Official Fan Football Coloured Stripe",
      price: "4500",
      image: "/ball1.png"
  },
  {
      kitName: "HiFL Official Fan Football Coloured Stripe",
      price: "6500",
      image: "/ball2.png"
  },
  {
      kitName: "HiFL Official Fan Football Coloured Stripe",
      price: "6500",
      image: "/ball1.png"
  },
]

const wearablesDetails = [
  {
      kitName: "HiFL Black Crest Cap",
      price: "2500",
      image: "/cap1.png"
  },
  {
      kitName: "HiFL Black Crest Cap",
      price: "2500",
      image: "/cap2.png"
  },
  {
      kitName: "HiFL Black Crest Cap",
      price: "2500",
      image: "/cap1.png"
  },
]
const Store = () => {
  const [items, setItems] = useState(0);
  return (
    <div className="font-redhat">
      <div className="bg-gray-200 md:mx-10 mb-10">
        <div className="bg-gray-200 p-4 border-b-2 border-b-gray-700">
          <span className="text-secondary font-bold text-xl md:px-10"> Categories</span>
        </div>
        <div className="flex items-center justify-between gap-5 md:gap-10 overflow-scroll lg:overflow-hidden scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-gray-200 h-28 max-w-6xl mx-auto px-5">
          {storeItems?.map((item, idx) => (
            <div
              key={idx}
              className={`${
                items === idx ? "bg-secondary" : " bg-gray-300"
              } p-4 w-full text-center font-bold text-white cursor-pointer rounded-xl`}
              onClick={() => setItems(idx)}>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div>
        {items == 0 && <Kits details={kitDetails} />}
        {items == 1 && <Kits details={equipmentDetails} />}
        {items == 2 && <Kits details={wearablesDetails} />}
      </div>

      <div className="w-full lg:w-8/12 xl:w-9/12">
        <LatestNews />
        <LatestVideos />
      </div>

      <div className="bg-white">
        <div className="h-1 mt-10 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        <div className="max-w-[94%] md:max-w-[90%] mx-auto">
          <Sponsors />
        </div>
      </div>
    </div>
  );
};

export default Store;
