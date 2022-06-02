import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { isLoggedIn } from "../../redux/features/auth.slice";

import AccountHeader from "../../components/shared/AccountHeader";
import SideMenu from "../../components/account/SideMenu";
import AccountOverview from "../../components/account/AccountOverview";
import Store from "../../components/account/Store";
import VolunteerForce from "../../components/account/VolunteerForce";
import Unifest from "../../components/account/Unifest";
import PredictAndWin from "../../components/account/PredictAndWin";

const Account = () => {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();

  //const view = [<AccountOverview />, <Store />, <VolunteerForce />, <Unifest />, <PredictAndWin />];

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("signin");
    }
  });

  return (
    <div className="font-redhat">
      <AccountHeader />
      <div className="bg-white">
        <div className="flex gap-3 max-w-[94%] md:max-w-[90%] mx-auto py-10 text-secondary">
          <div className="w-3/12">
            <SideMenu activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <div className="w-9/12 h-auto">
            {activeTab === 0 && <AccountOverview />}
            {activeTab === 1 && <Store />}
            {activeTab === 2 && <VolunteerForce />}
            {activeTab === 3 && <Unifest />}
            {activeTab === 4 && <PredictAndWin />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
