import React from "react";
import FixturesBrief from "../shared/FixturesBrief";
import PageTitle from "../shared/PageTitle";
import SideBar from "../shared/SideBar";

const StoreLayout = ({ children, name }) => {
  return (
    <div className="font-redhat text-secondary">
      <PageTitle name={name || "store"} />
      <div className="bg-white">
        <div className="max-w-[94%] md:max-w-[90%] mx-auto py-10 text-black">
          <div className="flex gap-7 xl:gap-10 justify-between">
            <div className="w-full lg:w-8/12 xl:w-9/12">{children}</div>
            <div className="hidden lg:block w-4/12 xl:w-3/12 space-y-8">
              <div>
                <FixturesBrief />
              </div>
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

export default StoreLayout;
