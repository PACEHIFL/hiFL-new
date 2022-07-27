import React from "react";
import Image from "next/image";
import { LocationMarkerIcon, ArrowRightIcon } from "@heroicons/react/solid";
import Moment from "react-moment";
import Link from "next/link";
import { useRouter } from "next/router";

const FixturesCard = ({ fixture }) => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <Link href={`${path}/${fixture._id}`}>
      <div className="grid cursor-pointer grid-cols-3 bg-[#F8F8F8] px-3 md:px-10 py-3 mb-6 hover:bg-[#FFEBA4] mt-3">
        <div className="flex items-center lg:justify-start col-span-3 lg:col-span-2 ">
          <div className="flex justify-end items-center w-[45%]">
            <span className="font-bold md:text-base">{fixture?.HomeTeam?.TeamAbbreviation}</span>
            <div className="rounded-full bg-white p-[0.3rem] hidden w-14 h-14 md:flex items-center justify-center ml-3">
              <img
                src={fixture?.HomeTeam?.TeamLogo ? fixture?.HomeTeam?.TeamLogo : "/default-team-logo.png"}
                className="w-full h-full ml-2"
                alt="team-logo"
              />
            </div>
          </div>
          <div className="px-3 py-1 md:mx-8">
            {fixture?.MatchStatus === "FIXTURE" && <span className="md:text-xl">vs</span>}
            {fixture?.MatchStatus === "RESULT" && (
              <div className="flex items-center justify-between w-full md:text-xl">
                <span>{fixture?.MatchStat[0]?.GoalScored?.HomeTeam}</span>
                <span className="px-3">:</span>
                <span>{fixture?.MatchStat[0]?.GoalScored?.AwayTeam}</span>
              </div>
            )}
          </div>
          <div className="flex justify-start items-center w-[45%]">
            <div className="rounded-full bg-white p-[0.3rem] hidden md:flex w-14 h-14 items-center justify-center mr-3">
              <img
                src={fixture?.AwayTeam?.TeamLogo ? fixture?.AwayTeam?.TeamLogo : "/default-team-logo.png"}
                className="w-full h-full ml-2"
                alt="team-logo"
              />
            </div>
            <span className="font-bold md:text-base capitalize">{fixture?.AwayTeam?.TeamAbbreviation}</span>
          </div>
        </div>
        <div className="flex items-center justify-between col-span-3 lg:col-span-1 pt-6 lg:pt-0 text-sm">
          <span>{fixture?.MatchTime}</span>
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
    </Link>
  );
};

export default FixturesCard;
