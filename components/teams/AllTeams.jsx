import React from "react";
import Filter from "./Filter";
import PageTitle from "../shared/PageTitle";
import SideBar from "../shared/SideBar";
import Link from "next/link";
import { ChevronRight } from '@heroicons/react/solid';

const teamInfo = [
  {
    schoolLogo: "/futa-logo.png",
    schoolName: "The Federal University of Technology, Akure",
    schoolBrief: "  FUTA Tigers",
  },
  {
    schoolLogo: "/futa-logo.png",
    schoolName: "The Federal University of Technology, Akure",
    schoolBrief: "  FUTA Tigers",
  },
  {
    schoolLogo: "/futa-logo.png",
    schoolName: "The Federal University of Technology, Akure",
    schoolBrief: "  FUTA Tigers",
  },
  {
    schoolLogo: "/futa-logo.png",
    schoolName: "The Federal University of Technology, Akure",
    schoolBrief: "  FUTA Tigers",
  },
  {
    schoolLogo: "/futa-logo.png",
    schoolName: "The Federal University of Technology, Akure",
    schoolBrief: "  FUTA Tigers",
  },
  {
    schoolLogo: "/futa-logo.png",
    schoolName: "University of Ilorin",
    schoolBrief: "Unilorin Warriors",
  },
];

const AllTeams = () => {
  const isOdd = (num) => num % 2 === 0;
  return (
    <div>
      <PageTitle name="Teams" />
      <div className="bg-white font-red-hat">
        <div className="max-w-[94%] md:max-w-[90%] mx-auto py-10 text-black">
          <div className="flex gap-7 xl:gap-20 justify-between">
            <div className="w-full lg:w-8/12 xl:w-9/12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-auto mb-10">
                <Filter title="Select Season" />
                <Filter title="Select League" />
                <Filter title="Select Stage" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {teamInfo?.map((team, idx) => (
                  <div
                    className={`${
                      isOdd(idx) ? "bg-[url('/team-bg-blue.png')]" : "bg-[url('/team-bg-red.png')]"
                    } bg-cover bg-no-repeat py-4 px-6`}
                    key={idx}>
                    <div className="rounded-full w-20 my-4 bg-white">
                      <img src={team.schoolLogo} alt={team.schoolBrief} className="w-full" />
                    </div>
                    <div>
                      <h1 className="text-yellow-400 font-semibold text-2xl">{team.schoolName}</h1>
                      <h1 className="font-semibold text-white mt-3 text-xl">{team.schoolBrief}</h1>
                      <span className="text-white mt-4 flex gap-3">
                        <Link href={team.schoolLogo}>View Team</Link>
                        <ChevronRight />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block w-4/12 xl:w-3/12 space-y-8">
              <div>
                <SideBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTeams;
