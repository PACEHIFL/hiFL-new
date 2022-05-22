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
      <div className="max-w-7xl mx-auto py-8">
        <div className="flex gap-8 justify-between">
          <div className="flex gap-8 w-9/12">
            <div className="w-7/12">
              <HighlightsCard />
            </div>
            <div className="w-5/12">
              <HeadlinesCard />
            </div>
          </div>
          <div className="w-3/12">
            <FixturesBrief />
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-10 text-black">
          <div className="flex gap-8 justify-between">
            <div className="w-9/12">
              <LatestUpdates />
            </div>
            <div className="w-3/12">
              <SideBar />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#D0D0D0">
        <div className="max-w-7xl mx-auto py-10 text-black">
          <Store />
        </div>
      </div>
      <Sponsors />
    </div>
  );
}
