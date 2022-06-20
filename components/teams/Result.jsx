import React from "react";
import LatestNews from "../shared/LatestNews";
import LatestVideos from "../shared/LatestVideos";
import Sponsors from "../shared/Sponsors";
import Image from "next/image";
import FixturesCard from "./FixturesCard";
import Filter from "./Filter";

const Results = () => {
  return (
    <div className="font-redhat">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mb-10">
        <Filter title="Select Season" />
        <Filter title="Select League" />
        <Filter title="Select Stage" />
      </div>

      {/* <FixturesCard /> */}
      <h1 className="mb-10 text-2xl">No Result Available yet</h1>

      <div className="w-full lg:w-8/12 xl:w-9/12">
        <LatestNews />
        <LatestVideos />
      </div>
    </div>
  );
};

export default Results;
