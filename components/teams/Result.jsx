import React from "react";
import LatestNews from "../shared/LatestNews";
import LatestVideos from "../shared/LatestVideos";
import SideBar from "../shared/SideBar";
import ResultCard from "./ResultCard";
import Filter from "./Filter";
import { BeatLoader } from "react-spinners";

const Results = ({ results, loading, handleChange, handleSeasonChange, seasons, stages }) => {
  return (
    <div className="font-redhat">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mb-10">
        <Filter title="Select Season" onChange={handleSeasonChange} name="CurrentSeason" seasons={seasons} />
        <select className="select w-full border-gray-500" name="hello" onChange={handleChange}>
          {stages &&
            stages?.map((stage, idx) => (
              <option className="text-red-  600" key={idx} value={stage?._id}>
                {stage?.StageName}
              </option>
            ))}
        </select>
      </div>

      {loading && (
        <div className="h-[400px] flex justify-center items-center">
          <BeatLoader loading={loading} color="#000229" />
        </div>
      )}

      {results.length !== 0 ? (
        results?.map((fixture, idx) => <ResultCard fixture={fixture} key={idx} />)
      ) : (
        <h1 className="text-xl mb-10">No Results available yet</h1>
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

export default Results;
