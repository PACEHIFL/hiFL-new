import React from "react";
import Image from "next/image";
import { LocationMarkerIcon, ArrowSmallRightIcon } from "@heroicons/react/solid"

const ResultCard = ({ data }) => {

  return (
    <div className="mb-10">
      <div className="flex items-center flex-col md:flex-row justify-between mb-4">
        <h1 className="text-secondary font-semibold  md:text-xl">{data.date}</h1>
        <span>{data.stage}</span>
      </div>
      <div className="text-secondary w-full flex flex-col md:flex-row items-center justify-between hover:bg-primary border-y p-3 hover:text-white">
        <div className="flex items-center justify-center ml-10">
          <div className="flex justify-center items-center">
            <span className="font-bold md:text-xl">{data.homeTeam.name}</span>
            <img src={data.homeTeam.logo} className="hidden md:inline-flex w-12 h-12 ml-2" alt="futa-logo" />
          </div>
          <div className="border bg-secondary hover:text-secondary border-gray-400 px-3 py-1 ml-2 md:mx-2">
            <span className="text-white">{data.homeTeam.score}</span>
          </div>
          <div className="border bg-secondary hover:text-secondary border-gray-400 px-3 py-1 ml-2 md:mx-2">
            <span className="text-white">{data.awayTeam.score}</span>
          </div>
          <div className="flex justify-center items-center">
            <img src={data.awayTeam.logo} className="hidden md:inline-flex w-12 h-12 mr-2" alt="futa-logo" />
            <span className="font-bold md:text-xl">{data.awayTeam.name}</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-3 md:mt-0">
          <div className="inline-flex">
            <LocationMarkerIcon className="md:w-6 md:h-6 w-4 h-4 mr-3" />
            <span className="font-bold text-sm md:text-lg">{data.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
