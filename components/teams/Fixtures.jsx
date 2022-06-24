import React from "react";
import LatestNews from "../shared/LatestNews";
import LatestVideos from "../shared/LatestVideos";
import SideBar from "../shared/SideBar";
import FixturesCard from "./FixturesCard";
import Filter from "./Filter";
import { BeatLoader } from "react-spinners";

const Fixtures = ({ data, loading }) => {

  return (
    <div className="font-redhat">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mb-10">
        <Filter title="Select Season" />
        <Filter title="Select Stage" />
      </div>

      {loading && (
                <div className="h-[400px] flex justify-center items-center">
                  <BeatLoader loading={loading} color="#000229" />
                </div>
              )}

      {data !== [] ? (
        data?.map((fixtures, idx) => <FixturesCard data={fixtures} key={idx} />)
      ) : (
        <h1>No Fixtures available yet</h1>
      )}

      <div className="w-full lg:w-8/12 xl:w-9/12">
        <LatestNews />
        <LatestVideos />
      </div>
      <div className="hidden lg:block w-4/12 xl:w-3/12">
        <SideBar />
      </div>
    </div>
  );
};

export default Fixtures;
