import React from "react";
import LatestNews from "../shared/LatestNews";
import LatestVideos from "../shared/LatestVideos";
import Sponsors from "../shared/Sponsors";
import Image from "next/image";
import FixturesCard from "./FixturesCard";
import Filter from "./Filter";

const Fixtures = () => {

  const fixturesItems = [
    {
      date: "20 June, 2022",
      stage: "Knockout Stage",
      location: "Unilorin Stadium",
      time: "4.00",
      homeTeam: {
        name: "Unilorin Warriors",
        logo: "/futa-logo.png"
      },
      awayTeam: {
        name: "Uniport Lions",
        logo: "/futa-logo.png"
      },
    },
    {
      date: "22 April, 2022",
      stage: "Quaterfinal | Second leg",
      location: "UNN Sports Complex, Nsukka",
      time: "4.00",
      homeTeam: {
        name: "FUTA Tigers",
        logo: "/futa-logo.png"
      },
      awayTeam: {
        name: "Unilorin Warriors",
        logo: "/futa-logo.png"
      },
    }
  ]

  return (
    <div className="font-redhat">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mb-10">
        <Filter title="Select Season" />
        <Filter title="Select League" />
        <Filter title="Select Stage" />
      </div>
      {fixturesItems?.map((fixtures, idx) => (
        <FixturesCard data={fixtures} key={idx} />
      ))}

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

export default Fixtures;
