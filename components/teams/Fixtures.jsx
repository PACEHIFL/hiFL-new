import React from "react";
import LatestNews from "../shared/LatestNews";
import LatestVideos from "../shared/LatestVideos";
import Sponsors from "../shared/Sponsors";
import Image from "next/image";
import FixturesCard from "./FixturesCard";
import Filter from "./Filter";

const Fixtures = () => {
  const fixturesItems = [];

  return (
    <div className="font-redhat">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mb-10">
        <Filter title="Select Season" />
        <Filter title="Select League" />
        <Filter title="Select Stage" />
      </div>

      {fixturesItems !== [] ? (
        fixturesItems?.map((fixtures, idx) => <FixturesCard data={fixtures} key={idx} />)
      ) : (
        <h1>No Fixtures available yet</h1>
      )}

      <div className="w-full lg:w-8/12 xl:w-9/12">
        <LatestNews />
        <LatestVideos />
      </div>
    </div>
  );
};

export default Fixtures;
