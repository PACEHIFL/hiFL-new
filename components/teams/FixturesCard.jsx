import React from "react";
import Image from "next/image";
import { LocationMarkerIcon, ArrowRightIcon } from "@heroicons/react/solid";
import Moment from "react-moment";

const FixturesCard = ({ fixture }) => {
  return (
    <div className="grid grid-cols-3 bg-[#F8F8F8] px-3 md:px-10 py-3 mb-6 hover:bg-[#FFEBA4]">
      <div className="flex items-center justify-between lg:justify-start col-span-3 lg:col-span-2 ">
        <div className="flex justify-center items-center">
          <span className="font-bold md:text-base">{fixture?.HomeTeam?.TeamAbbreviation}</span>
          <div className="rounded-full bg-white p-[0.3rem] hidden w-14 h-14 md:flex items-center justify-center ml-3">
            <img src="/default-team-logo.png" className="w-full h-full ml-2" alt="futa-logo" />
          </div>
        </div>
        <div className="bg-white border border-gray-400 px-3 py-1 md:mx-8">
          <span className="text-secondary">{fixture?.MatchTime}</span>{" "}
        </div>
        <div className="flex justify-center items-center">
          <div className="rounded-full bg-white p-[0.3rem] hidden md:flex w-14 h-14 items-center justify-center mr-3">
            <img src="/default-team-logo.png" className="w-full h-full ml-2" alt="futa-logo" />
          </div>
          <span className="font-bold md:text-base capitalize">{fixture?.AwayTeam?.TeamAbbreviation}</span>
        </div>
      </div>
      <div className="flex items-center justify-between col-span-3 lg:col-span-1 pt-6 lg:pt-0 text-sm">
        <span>
          {" "}
          <Moment format="MMMM Do YYYY" date={fixture?.MatchDate} />{" "}
        </span>
        <span>{fixture?.Stage?.StageName} </span>
        {/* <span>
          {" "}
          <ArrowRightIcon className="w-6 h-6 inline" />{" "}
        </span> */}
      </div>
    </div>
  );
};

export default FixturesCard;
