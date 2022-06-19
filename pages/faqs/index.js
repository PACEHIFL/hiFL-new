import React from "react";
import Accordion from "../../components/faqs/Accordion";
import PageTitle from "../../components/shared/PageTitle";
import SideBar from "../../components/shared/SideBar";
import { hiflFAQ, volunteerFAQ } from "../../helpers/data";

const Faqs = () => {
  return (
    <div>
      <PageTitle name="FAQs" />

      <div className="bg-white font-redhat">
        <div className="max-w-[94%] md:max-w-[90%] mx-auto py-10 text-black">
          <div className="flex gap-7 xl:gap-20 justify-between">
            <div className="w-full lg:w-8/12 xl:w-9/12">
              <div>
                <Accordion title="HiFL®" data={hiflFAQ} />
                <Accordion title="Volunteer Force" data={volunteerFAQ} />
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

export default Faqs;
