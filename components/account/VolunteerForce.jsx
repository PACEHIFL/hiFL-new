import React, { useState } from "react";
import AccountLayout from "../layout/AccountLayout";
import Link from "next/link";
import VolunteerTabs from "./VolunteerTabs";
import VolunteerWelcome from "./VolunteerWelcome";
import VolunteerResources from "./VolunteerResources";

const VolunteerForce = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <AccountLayout name="volunteer force">
        <div className="p-6">
          <div className="p-6 bg-white">
            <div className="border-b border-warning">
              <VolunteerTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div className="pt-6">
              {activeTab === 0 && <VolunteerWelcome />}
              {activeTab === 1 && <VolunteerResources />}
            </div>
          </div>
        </div>
      </AccountLayout>
      {/* <div className="bg-[#F8F8F8] p-5 mt-8 border-t-2 border-warning">
        <h2 className="px-5 py-3 font-bold text-3xl capitalize">Volunteer Resources</h2>
        <button className={`btn btn-wide btn-primary capitalize font-bold mt-8`}>Download Certificate</button>
      </div> */}
    </>
  );
};

export default VolunteerForce;
