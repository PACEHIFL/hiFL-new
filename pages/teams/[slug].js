import React, { useState } from "react";
import Fixtures from "../../components/teams/Fixtures";
import Overview from "../../components/teams/Overview";
import Squad from "../../components/teams/Squad";
import Tabs from "../../components/teams/Tabs";
import TeamsHeader from "../../components/teams/TeamsHeader";

const Slug = () => {
  const [tabs, setTabs] = useState(0)
  return (
    <div>
      <TeamsHeader />
      <Tabs tabs={tabs} setTabs={setTabs} />
      <div className="bg-white">
        <div className="max-w-[94%] md:max-w-[90%] mx-auto py-10 text-black">

          {tabs === 0 &&  <Overview />}
          {tabs === 1 &&  <Squad />}
          {tabs === 2 &&  <Fixtures />}
         
        </div>
      </div>
    </div>
  );
};

export default Slug;
  