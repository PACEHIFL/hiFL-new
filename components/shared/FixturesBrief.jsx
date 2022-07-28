import React from "react";
import Link from "next/link";
import useFetch from "../../hooks/useFetch";
import Moment from "react-moment";
import { BeatLoader } from "react-spinners";

const FixturesBrief = ({ settings }) => {
  const baseURL = process.env.BASE_URL;
  const { data, loading } = useFetch(
    `${baseURL}/leagues/season/fixtures/?Stage=${settings?.CurrentStage._id}&MatchStatus=RESULT`
  );

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
          {data?.data
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

// export const getStaticProps = async () => {
//   try {
//     const baseURL = process.env.BASE_URL;
//     const { data, errors } = await axios(`${baseURL}/leagues/season/fixtures/?MatchStatus=FIXTURE`);

//     if (!data || errors) {
//       return { notFound: true };
//     }

//     return {
//       props: {
//         data: data.data,
//       },
//     };
//   } catch (error) {
//     return { notFound: true };
//   }
// };
