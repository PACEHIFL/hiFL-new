import React from "react";
import LatestNews from "../shared/LatestNews";
import LatestVideos from "../shared/LatestVideos";
import Sponsors from "../shared/Sponsors";
import Image from "next/image";
import FixturesCard from "./FixturesCard";

const Results = () => {
  return (
    <div className="font-redhat">
      <div className="p-4 border rounded-md bg-white flex flex-col my-4">
        <span className="text-red-600">Filter by season</span>
        <span className="font-bold">2022</span>
      </div>

      <FixturesCard />
      <FixturesCard />
      <FixturesCard />
      <FixturesCard />
      <FixturesCard />
      <FixturesCard />
      <FixturesCard />
      <FixturesCard />
      <FixturesCard />

      <div className="w-full lg:w-8/12 xl:w-9/12">
        <LatestNews />
        <LatestVideos />
      </div>
    </div>
  );
};

export default Results;
