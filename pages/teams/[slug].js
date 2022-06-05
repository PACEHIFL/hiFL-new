import React, { useState } from "react";
import Fixtures from "../../components/teams/Fixtures";
import Overview from "../../components/teams/Overview";
import Results from "../../components/teams/Result";
import Squad from "../../components/teams/Squad";
import Tabs from "../../components/teams/Tabs";
import TeamsHeader from "../../components/teams/TeamsHeader";
import Stats from '../../components/teams/Stats';
import Store from '../../components/teams/Store';

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
          {tabs === 3 &&  <Results />}
          {tabs === 4 &&  <Stats />}
          {tabs === 5 &&  <Store />}
        </div>
      </div>
    </div>
  );
};

export default Slug;
  