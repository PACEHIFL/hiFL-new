import React from "react";
import TeamPlayer from "./TeamPlayer";
import LatestNews from "../shared/LatestNews";
import LatestVideos from "../shared/LatestVideos";
import Sponsors from "../shared/Sponsors";

const Squad = () => {
  return (
    <div className="font-redhat">
      <div className="p-4 border rounded-md bg-white flex flex-col my-4">
        <span className="text-red-600">Filter by season</span>
        <span className="font-bold">2022</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
          <TeamPlayer key={item} />
        ))}
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

export default Squad;
