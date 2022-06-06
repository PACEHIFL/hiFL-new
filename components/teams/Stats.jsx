import React from "react";
import LatestNews from "../shared/LatestNews";
import LatestVideos from "../shared/LatestVideos";
import Sponsors from "../shared/Sponsors";

const Stats = () => {
  return (
    <div className="font-redhat">
      <div className="p-4 border rounded-md bg-white flex flex-col my-4">
        <span className="text-red-600">Filter by season</span>
        <span className="font-bold">2022</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 max-w-7xl mx-auto gap-5 md:gap-0 my-10">
        <div className="py-3 px-3 flex flex-col items-center justify-center md:px-10 border-2 border-t-red-900 border-t-4 text-center">
          <span className="md:font-bold">Matches Played</span>
          <h1 className="text-4xl md:text-6xl font-bold">22</h1>
        </div>
        <div className="py-3 px-3 flex flex-col items-center justify-center md:px-10 border-2 border-t-red-900 border-t-4 text-center">
          <span className="md:font-bold">Wins</span>
          <h1 className="text-4xl md:text-6xl font-bold">16</h1>
        </div>
        <div className="py-3 px-3 flex flex-col items-center justify-center md:px-10 border-2 border-t-red-900 border-t-4 text-center">
          <span className="md:font-bold">Loses</span>
          <h1 className="text-4xl md:text-6xl font-bold">6</h1>
        </div>
        <div className="py-3 px-3 flex flex-col items-center justify-center md:px-10 border-2 border-t-red-900 border-t-4 text-center">
          <span className="md:font-bold">Goals</span>
          <h1 className="text-4xl md:text-6xl font-bold">51</h1>
        </div>
        <div className="py-3 px-3 flex flex-col items-center justify-center md:px-10 border-2 border-t-red-900 border-t-4 text-center">
          <span className="md:font-bold">Goals Conceded</span>
          <h1 className="text-4xl md:text-6xl font-bold">41</h1>
        </div>
        <div className="py-3 px-3 flex flex-col items-center justify-center md:px-10 border-2 border-t-red-900 border-t-4 text-center">
          <span className="md:font-bold">Clean Sheets</span>
          <h1 className="text-4xl md:text-6xl font-bold">10</h1>
        </div>
      </div>

      <div className="grid  md:grid-cols-2 lg:grid-cols-4 mb-10 gap-5">
        <div className="border border-t-2 border-t-secondary">
          <h1 className="font-bold p-4">Attack </h1>
          <div className="flex items-center justify-between p-4 border-t">
            <span>Goals </span>
            <span> 51</span>
          </div>
          <div className="flex items-center justify-between p-4 border-t">
            <span>Goals </span>
            <span> 51</span>
          </div>
          <div className="flex items-center justify-between p-4 border-t">
            <span>Goals per match </span>
            <span> 51</span>
          </div>
          <div className="flex items-center justify-between p-4 border-t">
            <span>Shots </span>
            <span> 51</span>
          </div>
          <div className="flex items-center justify-between p-4 border-t">
            <span>Shots on target </span>
            <span> 51</span>
          </div>
          <div className="flex items-center justify-between p-4 border-t">
            <span>Penalty scored </span>
            <span> 51</span>
          </div>
          <div className="flex items-center justify-between p-4 border-t">
            <span>Big chances created </span>
            <span> 51</span>
          </div>
        </div>

        <div className="border border-t-2 border-t-secondary">
          <h1 className="font-bold p-4">Teams Play </h1>
          <div className="flex items-center justify-between p-4 border-t">
            <span>Goals </span>
            <span> 51</span>
          </div>
          <div className="flex items-center justify-between p-4 border-t">
            <span>Goals </span>
            <span> 51</span>
          </div>
          <div className="flex items-center justify-between p-4 border-t">
            <span>Goals per match </span>
            <span> 51</span>
          </div>
          <div className="flex items-center justify-between p-4 border-t">
            <span>Shots </span>
            <span> 51</span>
          </div>
          <div className="flex items-center justify-between p-4 border-t">
            <span>Shots on target </span>
            <span> 51</span>
          </div>
          <div className="flex items-center justify-between p-4 border-t">
            <span>Penalty scored </span>
            <span> 51</span>
          </div>
          <div className="flex items-center justify-between p-4 border-t">
            <span>Big chances created </span>
            <span> 51</span>
          </div>
        </div>

        <div className="border border-t-2 border-t-secondary">
          <h1 className="font-bold p-4">Defence </h1>
          <div className="flex items-center justify-between p-4 border-t">
            <span>Goals </span>
            <span> 51</span>
          </div>
          <div className="flex items-center justify-between p-4 border-t">
            <span>Goals </span>
            <span> 51</span>
          </div>
          <div className="flex items-center justify-between p-4 border-t">
            <span>Goals per match </span>
            <span> 51</span>
          </div>
          <div className="flex items-center justify-between p-4 border-t">
            <span>Shots </span>
            <span> 51</span>
          </div>
          <div className="flex items-center justify-between p-4 border-t">
            <span>Shots on target </span>
            <span> 51</span>
          </div>
          <div className="flex items-center justify-between p-4 border-t">
            <span>Penalty scored </span>
            <span> 51</span>
          </div>
          <div className="flex items-center justify-between p-4 border-t">
            <span>Big chances created </span>
            <span> 51</span>
          </div>
        </div>

        <div className="border border-t-2 border-t-secondary">
          <h1 className="font-bold p-4">Discipline </h1>
          <div className="flex items-center justify-between p-4 border-t">
            <span>Goals </span>
            <span> 51</span>
          </div>
          <div className="flex items-center justify-between p-4 border-t">
            <span>Goals </span>
            <span> 51</span>
          </div>
          <div className="flex items-center justify-between p-4 border-t">
            <span>Goals per match </span>
            <span> 51</span>
          </div>
          <div className="flex items-center justify-between p-4 border-t">
            <span>Shots </span>
            <span> 51</span>
          </div>
          <div className="flex items-center justify-between p-4 border-t">
            <span>Shots on target </span>
            <span> 51</span>
          </div>
          <div className="flex items-center justify-between p-4 border-t">
            <span>Penalty scored </span>
            <span> 51</span>
          </div>
          <div className="flex items-center justify-between p-4 border-t">
            <span>Big chances created </span>
            <span> 51</span>
          </div>
        </div>
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

export default Stats;
