import { useState } from "react";
import HeadlinesCard from "../components/home/HeadlinesCard";
import HighlightsCard from "../components/home/HighlightsCard";
import LatestUpdates from "../components/home/LatestUpdates";
import Store from "../components/home/Store";
import FixturesBrief from "../components/shared/FixturesBrief";
import ResultsBrief from "../components/shared/ResultsBrief";
import SideBar from "../components/shared/SideBar";
import axios from "axios";

export default function Home({ settings }) {
  // const [tabs, setTabs] = useState("fixture");
  // const tabItems = ["Fixtures", "Results"];

  return (
    <div className="bg-[#ece9e9]">
      <div className="max-w-[94%] md:max-w-[90%] mx-auto py-8">
        <div className="flex flex-col md:flex-row gap-5 xl:gap-8 justify-between h-auto">
          <div className="flex gap-5 xl:gap-8 w-full md:w-6/12 lg:w-8/12 xl:w-9/12 h-auto">
            <div className="w-full xl:w-7/12 h-auto">
              <HighlightsCard />
            </div>
            <div className="w-5/12 hidden xl:block">
              <HeadlinesCard />
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-4/12 xl:w-3/12">
            {/* <div className="tabs  bg-white font-redhat flex items-center">
              <a className="text-lg text-black mt-2">{settings?.CurrentStage?.StageName}</a>
            </div> */}
            <FixturesBrief settings={settings} />
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-[94%] md:max-w-[90%] mx-auto py-10 text-black">
          <div className="flex gap-5 xl:gap-8 justify-between">
            <div className="w-full lg:w-8/12 xl:w-9/12">
              <LatestUpdates />
            </div>
            <div className="hidden lg:block w-4/12 xl:w-3/12">
              <SideBar />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ece9e9]">
        <div className="max-w-[94%] md:max-w-[90%] mx-auto py-10 text-black">
          <Store />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const baseURL = process.env.BASE_URL;
    const { data, errors } = await axios(`${baseURL}/settings/setting/league/?CurrentLeagueName=HiFL`);

    if (errors || !data) {
      return { notFound: true };
    }

    return {
      props: {
        settings: data.data,
      },
      revalidate: 15,
    };
  } catch (error) {
    return { notFound: true };
  }
}
