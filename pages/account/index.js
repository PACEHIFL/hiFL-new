import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { isLoggedIn } from "../../redux/features/auth.slice";

import AccountHeader from "../../components/shared/AccountHeader";
import SideMenu from "../../components/account/SideMenu";
import Profile from "../../components/account/Profile";
import Store from "../../components/account/Store";
import VolunteerForce from "../../components/account/VolunteerForce";
import Unifest from "../../components/account/Unifest";
import PredictAndWin from "../../components/account/PredictAndWin";

const Account = () => {
  const router = useRouter();
  const path = router.query.tab;

  const isProfile = path === "profile" || path == null;
  const isStore = path === "store";
  const isVolunteer = path === "volunteer-force";
  const isUnifest = path === "unifest";
  const isPredict = path === "predict&win";

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
          <div className="w-3/12 hidden lg:block">
            <SideMenu />
          </div>
          <div className="w-full lg:w-9/12 h-auto">
            <div className="w-full mb-4 lg:hidden">
              <SideMenu />
            </div>
            {isProfile && <Profile />}
            {isStore && <Store />}
            {isVolunteer && <VolunteerForce />}
            {isUnifest && <Unifest />}
            {isPredict && <PredictAndWin />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
