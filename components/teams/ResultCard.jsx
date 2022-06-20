import React from "react";
import Image from "next/image";
import { LocationMarkerIcon, ArrowRightIcon } from "@heroicons/react/solid"
import Moment from "react-moment";

const ResultCard = ({ data }) => {

  return (
    <div className="grid grid-cols-3 bg-[#F8F8F8] px-10 py-3 mb-6 hover:bg-[#FFEBA4]">
      <div className="flex items-center justify-start col-span-2">
        <div className="flex justify-center items-center">
          <span className="font-bold md:text-lg">{data?.HomeTeam?.TeamName}</span>
          <div className="rounded-full bg-white p-[0.3rem] w-14 h-14 flex items-center justify-center ml-3">
            <img src="/default-team-logo.png" className="hidden md:block w-full h-full ml-2" alt="futa-logo" />
          </div>
        </div>
        <div className="bg-white border border-gray-400 px-3 py-1 md:mx-8">
          <div className="border bg-secondary hover:text-secondary border-gray-400 px-3 py-1 ml-2 md:mx-2">
            <span className="text-white">{data.homeTeam.score}</span>
          </div>
          <div className="border bg-secondary hover:text-secondary border-gray-400 px-3 py-1 ml-2 md:mx-2">
            <span className="text-white">{data.awayTeam.score}</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="rounded-full bg-white p-[0.3rem] w-14 h-14 flex items-center justify-center mr-3">
            <img src="/default-team-logo.png" className="hidden md:block w-full h-full ml-2" alt="futa-logo" />
          </div>
          <span className="font-bold md:text-lg capitalize">{data.AwayTeam.TeamName}</span>
        </div>
      </div>
      <div className="flex items-center justify-between col-span-1">
        <span>  <Moment format="MMMM Do YYYY" date={data.MatchDate} /> </span>
        <span>{data.Stage.StageName} </span>
        <span> <ArrowRightIcon className="w-6 h-6 inline" /> </span>
      </div>
    </div>
  );
};

export default ResultCard;
