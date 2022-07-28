import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { BeatLoader } from "react-spinners";

const FixturesBrief = () => {
  const baseURL = process.env.BASE_URL;
  const [settings, setSettings] = useState({});
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSettings = async () => {
    setLoading(true);
    const { data } = await axios(`${baseURL}/settings/setting/league/?CurrentLeagueName=HiFL`);
    setSettings(data?.data);
  };

  const fetchFixtures = async () => {
    setLoading(true);
    const { data } = await axios(
      `${baseURL}/leagues/season/fixtures/?Stage=${settings?.CurrentStage?._id}&MatchStatus=RESULT`
    );
    setFixtures(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  useEffect(() => {
    fetchFixtures();
  }, [settings]);

  return (
    <div className="border-t-[5px] border-primary relative bg-white border-[5px] text-black font-redhat text-center border-x-0 w-full py-5 px-8 h-[90%]">
      <div>
        <h2 className="text-accent text-md font-bold">{settings?.CurrentStage?.StageName}</h2>

        {loading && (
          <div className="h-[400px] flex justify-center items-center">
            <BeatLoader loading={loading} color="#000229" />
          </div>
        )}

        <div className="">
          {fixtures?.data
            ?.slice(0, 6)
            .map(
              (
                { HomeTeam: { TeamAbbreviation: HomeTeam }, AwayTeam: { TeamAbbreviation: AwayTeam }, MatchStat },
                i
              ) => (
                <div
                  className="flex items-center gap-4 py-5 border-[0.5px] border-[#BFBFBF] border-b border-x-0 border-t-0"
                  key={i}>
                  <div className="flex justify-end w-[45%]">
                    <h3 className="font-bold text-sm uppercase">{HomeTeam}</h3>
                  </div>
                  <div className="flex items-center bg-primary text-white px-2 py-1 font-semibold">
                    <span>{MatchStat[0]?.GoalScored?.HomeTeam}</span>
                    <span className="px-3 font-extrabold">:</span>
                    <span>{MatchStat[0]?.GoalScored?.AwayTeam}</span>
                  </div>
                  <div className="flex justify-start w-[45%]">
                    <h3 className="font-bold text-sm uppercase">{AwayTeam}</h3>
                  </div>
                </div>
              )
            )}

          <div className="flex justify-end absolute bottom-5 right-5">
            <div className="flex gap-2 items-center mt-10">
              <Link href="/fixtures">
                <a>View All</a>
              </Link>
              <div>
                <img src="/right-arrow.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixturesBrief;
