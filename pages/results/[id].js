import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import SideBar from "../../components/shared/SideBar";
import { BeatLoader } from "react-spinners";

const Slug = () => {
  const [loading, setLoading] = useState(false);
  const [fixtureDetails, setFixtureDetails] = useState(null);
  const router = useRouter();
  const id = router.query.id;
  const baseURL = process.env.BASE_URL;

  useEffect(() => {
    const fetchFixture = async () => {
      try {
        setLoading(true);
        const { data } = await axios(`${baseURL}/leagues/season/fixtures/fixture/?_id=${id}`);
        setFixtureDetails(data?.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchFixture();
  }, []);

  console.log(fixtureDetails);

  return (
    <div className="bg-white font-redhat">
      {fixtureDetails && (
        <div className="max-w-[94%] md:max-w-[90%] mx-auto py-10 text-black">
          <div className="flex gap-7 xl:gap-20 justify-between">
            <div className="w-full lg:w-8/12 xl:w-9/12">
              <div className="flex items-center justify-between px-5 md:px-10 border py-3 md:text-lg bg-red-600 mb-4 text-white font-bold">
                <div className="flex items-center">
                  <span className="text-xs md:text-lg">{fixtureDetails?.HomeTeam?.TeamName}</span>
                  <img
                    src={
                      fixtureDetails?.HomeTeam?.TeamLogo ? fixtureDetails?.HomeTeam?.TeamLogo : "/default-team-logo.png"
                    }
                    className="w-12 h-12 rounded-full border border-white border-2 ml-4 hidden md:inline-flex"
                  />
                </div>
                <div className="flex items-center">
                  <span className="md:text-3xl">
                    {fixtureDetails?.MatchStat[0]?.GoalScored?.HomeTeam
                      ? fixtureDetails?.MatchStat[0]?.GoalScored?.HomeTeam
                      : "0"}
                  </span>
                  <span className="px-3 md:px-10"> : </span>
                  <span className="md:text-3xl">
                    {fixtureDetails?.MatchStat[0]?.GoalScored?.AwayTeam
                      ? fixtureDetails?.MatchStat[0]?.GoalScored?.AwayTeam
                      : "0"}
                  </span>
                </div>
                <div className="flex items-center">
                  <img
                    src={
                      fixtureDetails?.HomeTeam?.TeamLogo ? fixtureDetails?.HomeTeam?.TeamLogo : "/default-team-logo.png"
                    }
                    className="w-12 h-12 rounded-full border border-white border-2 mr-4 hidden md:inline-flex"
                  />
                  <span className="text-xs md:text-lg">{fixtureDetails?.HomeTeam?.TeamName}</span>
                </div>
              </div>

              <div className="flex items-center justify-between px-5 md:px-10 border py-3 md:text-lg">
                <span>
                  {fixtureDetails?.MatchStat[0]?.GoalScored?.HomeTeam
                    ? fixtureDetails?.MatchStat[0]?.GoalScored?.HomeTeam
                    : "0"}
                </span>
                <span>Goals Scored</span>
                <span>
                  {fixtureDetails?.MatchStat[0]?.GoalScored?.AwayTeam
                    ? fixtureDetails?.MatchStat[0]?.GoalScored?.AwayTeam
                    : "0"}
                </span>
              </div>

              <div className="flex items-center justify-between px-5 md:px-10 border py-3 md:text-lg">
                <span>
                  {fixtureDetails?.MatchStat[1]?.RedCard?.HomeTeam
                    ? fixtureDetails?.MatchStat[1]?.RedCard?.HomeTeam
                    : "0"}
                </span>
                <span>Red Card</span>
                <span>
                  {fixtureDetails?.MatchStat[1]?.RedCard?.AwayTeam
                    ? fixtureDetails?.MatchStat[1]?.RedCard?.AwayTeam
                    : "0"}
                </span>
              </div>

              <div className="flex items-center justify-between px-5 md:px-10 border py-3 md:text-lg">
                <span>
                  {fixtureDetails?.MatchStat[2]?.YellowCard?.HomeTeam
                    ? fixtureDetails?.MatchStat[2]?.YellowCard?.HomeTeam
                    : "0"}
                </span>
                <span>Yellow Card</span>
                <span>
                  {fixtureDetails?.MatchStat[2]?.YellowCard?.AwayTeam
                    ? fixtureDetails?.MatchStat[2]?.YellowCard?.AwayTeam
                    : "0"}
                </span>
              </div>

              <div className="flex items-center justify-between px-5 md:px-10 border py-3 md:text-lg">
                <span>
                  {fixtureDetails?.MatchStat[3]?.ShotsOnTarget?.HomeTeam
                    ? fixtureDetails?.MatchStat[3]?.ShotsOnTarget?.HomeTeam
                    : "0"}
                </span>
                <span>Shots On Target</span>
                <span>
                  {fixtureDetails?.MatchStat[3]?.ShotsOnTarget?.AwayTeam
                    ? fixtureDetails?.MatchStat[3]?.ShotsOnTarget?.AwayTeam
                    : "0"}
                </span>
              </div>
            </div>
            <div className="hidden lg:block w-4/12 xl:w-3/12 space-y-8">
              <div>
                {/* <LatestNewsSideBar /> */}
                <SideBar />
              </div>
            </div>
          </div>
        </div>
      )}

      {loading && (
        <div className="h-[400px] flex justify-center items-center">
          <BeatLoader loading={loading} color="#000229" />
        </div>
      )}
    </div>
  );
};

export default Slug;
