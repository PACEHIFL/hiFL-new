import React from "react";
import Link from "next/link";
import useFetch from "../../hooks/useFetch";
import Moment from "react-moment";
import { BeatLoader } from "react-spinners";

const FixturesBrief = () => {
  const baseURL = process.env.BASE_URL;
  const { data, loading } = useFetch(`${baseURL}/leagues/season/fixtures/?MatchStatus=RESULT`);

  return (
    <div className="relative bg-white border-[5px] text-black font-redhat text-center border-x-0 border-t-0 border-primary w-full py-5 px-8 h-[90%]">
      <div>
        {/* <h2 className="text-accent text-md font-bold">Results</h2> */}
        {/* <h2 className="text-[#000229] text-md font-bold p-5">
          <Moment format="MMMM Do YYYY" date={data?.data[0]?.MatchDate} />
        </h2> */}

        {loading && (
          <div className="h-[400px] flex justify-center items-center">
            <BeatLoader loading={loading} color="#000229" />
          </div>
        )}

        <div className="">
          {data?.data.length > 0 ? data?.data
            ?.slice(0, 4)
            .map(
              (
                { HomeTeam: { TeamAbbreviation: HomeTeam }, AwayTeam: { TeamAbbreviation: AwayTeam }, MatchTime },
                i
              ) => (
                <div
                  className="flex gap-4 justify-between items-center py-5 border-[0.5px] border-[#BFBFBF] border-b border-x-0 border-t-0"
                  key={i}>
                  <div className="flex gap-3 items-center">
                    <h3 className="font-bold text-sm uppercase">{HomeTeam}</h3>
                    {/* <img src="/unn.png" alt="" className="w-[35px] h-[35px]" /> */}
                  </div>
                  <p className="border border-[#CBCBCB] px-4 py-1 text-sm">{MatchTime}</p>
                  <div className="flex gap-3 items-center">
                    {/* <img src="/unn.png" alt="" className="w-[35px] h-[35px]" /> */}
                    <h3 className="font-bold text-sm uppercase">{AwayTeam}</h3>
                  </div>
                </div>
              )
            ) : <h1>No results available yet. </h1>}
          <div className="flex justify-end absolute bottom-5 right-5">
            <div className="flex gap-2 items-center mt-4">
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
