import React from "react";
import PageTitle from "../../components/shared/PageTitle";
import Filter from "../../components/teams/Filter";
import SideBar from "../../components/shared/SideBar";
import FixturesCard from "../../components/teams/FixturesCard";
import axios from "axios";

const Fixtures = ({ data }) => {
  const handleChange = () => { };


  return (
    <div>
      <PageTitle name="Fixtures" />
      <div className="bg-white font-red-hat">
        <div className="max-w-[94%] md:max-w-[90%] mx-auto py-10 text-black">
          <div className="flex gap-7 xl:gap-20 justify-between">
            <div className="w-full lg:w-8/12 xl:w-9/12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-auto mb-10">
                <Filter title="Select Season" onChange={handleChange} name="CurrentSeason" />
                <Filter title="Select League" />
                <Filter title="Select Stage" />
              </div>

              <div className="">
                {data?.map((fixtures, idx) => (
                  <FixturesCard data={fixtures} key={idx} />
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

export default Fixtures;

export const getStaticProps = async () => {
  try {
    const baseURL = process.env.BASE_URL;
    const { data, errors } = await axios(`${baseURL}/leagues/season/fixtures/?MatchStatus=FIXTURE`);

    if (!data || errors) {
      return { notFound: true };
    }

    return {
      props: {
        data: data.data,
      },
    };
  } catch (error) {
    return { notFound: true };
  }

};