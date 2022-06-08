import React, { useState } from "react";
import AccountLayout from "../layout/AccountLayout";
import Link from "next/link";
import VolunteerTabs from "./volunteer/VolunteerTabs";
import VolunteerWelcome from "./volunteer/VolunteerWelcome";
import VolunteerResources from "./volunteer/VolunteerResources";

const VolunteerForce = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <AccountLayout name="volunteer force">
      <div className="p-3 md:p-6">
        <div className="md:p-6 bg-white">
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
  );
};

export default VolunteerForce;
