import React, { useState } from "react";
import Filter from "./Filter";
import PageTitle from "../shared/PageTitle";
import SideBar from "../shared/SideBar";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronRight } from "@heroicons/react/outline";

const AllTeams = ({ data, allSeasons }) => {
  const [AllSeasons, setAllSeasons] = useState(allSeasons);
  const initialState = { CurrentSeason: AllSeasons, CurrentLeague: "", CurrentStage: "" };
  const [seasonDetails, setSeasonDetails] = useState(initialState);
  const isOdd = (num) => num % 2 === 0;
  const router = useRouter();
  const path = router.pathname;

  const handleChange = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <PageTitle name="Teams" />
      <div className="bg-white font-red-hat">
        <div className="max-w-[94%] md:max-w-[90%] mx-auto py-10 text-black">
          <div className="flex gap-7 xl:gap-20 justify-between">
            <div className="w-full lg:w-8/12 xl:w-9/12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-auto mb-10">
                <Filter
                  title="Select Season"
                  onChange={handleChange}
                  name="CurrentSeason"
                  seasonDetails={seasonDetails}
                />
                <Filter title="Select League" />
                <Filter title="Select Stage" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {data &&
                  data?.map((team, idx) => (
                    <Link href={`${path}/${team._id}`} key={idx}>
                      <div
                        className={`${
                          isOdd(idx) ? "bg-[url('/team-bg-blue.png')]" : "bg-[url('/team-bg-red.png')]"
                        } bg-cover bg-no-repeat py-4 px-6 cursor-pointer`}>
                        <div className="rounded-full w-20 my-4 bg-white">
                          <img
                            src={`${team.schoolLogo ? team.schoolLogo : "/default-team-logo.png"}`}
                            alt={team.TeamName}
                            className="w-full"
                          />
                        </div>
                        <div>
                          <h1 className="text-yellow-400 font-semibold text-2xl">
                            {team?.Institution?.InstitutionName}
                          </h1>
                          <h1 className="font-semibold text-white mt-3 text-xl">{team.TeamName}</h1>
                          <span className="text-white mt-4 flex gap-3">View Team</span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
            <div className="hidden lg:block w-4/12 xl:w-3/12">
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTeams;
