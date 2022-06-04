import React from "react";

import SideBar from "../../components/shared/SideBar";
import TeamsHeader from "../../components/teams/TeamsHeader";

const Slug = () => {
  return (
    <div>
      <TeamsHeader />
      <div className="bg-white">
        <div className="max-w-[94%] md:max-w-[90%] mx-auto py-10 text-black">
          <div className="flex gap-5 xl:gap-8 justify-between">
            <div className="w-full lg:w-8/12 xl:w-9/12">
              <h1> Hello World</h1>
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
export default Slug;
