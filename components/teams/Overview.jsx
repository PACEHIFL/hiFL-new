import React from "react";
import SideBar from "../../components/shared/SideBar";
import LatestNews from "../shared/LatestNews";
import LatestVideos from "../shared/LatestVideos";
import Sponsors from "../shared/Sponsors";

const Overview = ({ data: { Overview } }) => {
  return (
    <div>
      <div className="flex gap-5 xl:gap-8 justify-between font-redhat">
        <div className="w-full lg:w-8/12 xl:w-9/12">
          <h1 className="text-base md:text-xl px-5 w-[80%] pb-6 leading-7 text-justify">{Overview}</h1>
          <div className="mb-10">
            <h1 className="font-bold text-4xl pb-4">Officials</h1>
            <div className="border rounded-md py-2">
              <h4 className="font-bold pl-4 pb-2">Head Coach</h4>
              <hr />
              <span className=" pl-4 pt-2 block"> Ezekiel Adams </span>
            </div>

            <div className="border rounded-md py-2 mt-6">
              <h4 className="font-bold pl-4 pb-2">Assistant Coach</h4>
              <hr />
              <span className=" pl-4 pt-2 block"> Ezekiel Adams </span>
            </div>

            <div className="border rounded-md py-2 mt-6">
              <h4 className="font-bold pl-4 pb-2">Director of Sports</h4>
              <hr />
              <span className=" pl-4 pt-2 block"> Ezekiel Adams </span>
            </div>
          </div>

          <hr />

          <LatestNews />
          <LatestVideos />
        </div>
        <div className="hidden lg:block w-4/12 xl:w-3/12">
          <SideBar />
        </div>
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

export default Overview;
