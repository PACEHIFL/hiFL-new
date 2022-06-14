import HeadlinesCard from "../components/home/HeadlinesCard";
import HighlightsCard from "../components/home/HighlightsCard";
import LatestUpdates from "../components/home/LatestUpdates";
import Store from "../components/home/Store";
import FixturesBrief from "../components/shared/FixturesBrief";
import SideBar from "../components/shared/SideBar";
import Sponsors from "../components/shared/Sponsors";

export default function Home() {
  return (
    <div className="bg-[#D0D0D0]">
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
            <FixturesBrief />
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
      <div className="bg-[#D0D0D0]">
        <div className="max-w-[94%] md:max-w-[90%] mx-auto py-10 text-black">
          <Store />
        </div>
      </div>
    </div>
  );
}
