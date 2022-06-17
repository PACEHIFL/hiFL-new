import React, { useState } from "react";
import Fixtures from "../../components/teams/Fixtures";
import Overview from "../../components/teams/Overview";
import Results from "../../components/teams/Result";
import Squad from "../../components/teams/Squad";
import Tabs from "../../components/teams/Tabs";
import SideBar from "../../components/shared/SideBar";
import TeamsHeader from "../../components/teams/TeamsHeader";
import Stats from "../../components/teams/Stats";
import Store from "../../components/teams/Store";
import axios from "axios";

const Slug = ({ data, players }) => {

  const [tabs, setTabs] = useState(0);
  return (
    <div>
      <TeamsHeader data={data} />
      <Tabs tabs={tabs} setTabs={setTabs} />
      <div className="bg-white">
        <div className="max-w-[94%] md:max-w-[90%] mx-auto py-10 text-black">
          {tabs === 0 && <Overview data={data} />}
          {tabs === 1 && <Squad data={players} />}
          {tabs === 2 && <Fixtures />}
          {tabs === 3 && <Results data={data} />}
          {tabs === 4 && <Stats data={data} />}
          {tabs === 5 && <Store data={data} />}
        </div>
      </div>
    </div>
  );
};
export default Slug;

export const getStaticProps = async ({ params: { id } }) => {
  try {
    const baseURL = process.env.BASE_URL;
    const { data, errors } = await axios(`${baseURL}/teams/team/?_id=${id}`);
    const { data: players } = await axios(`${baseURL}/players/active/?Team=${id}`);

    if (!data || errors) {
      return { notFound: true };
    }

    return {
      props: {
        data: data.data,
        players: players.data,
      },
    };
  } catch (error) {
    return { notFound: true };
  }

};

export const getStaticPaths = async () => {
  try {
    const baseURL = process.env.BASE_URL;
    const { data } = await axios(`${baseURL}/teams/all`);

    const ids = data.data.map((team) => team._id);
    const paths = ids.map((id) => ({ params: { id: id + "" } }));

    return {
      paths,
      fallback: true,
    };
  } catch (error) {
    return { paths: [], fallback: true };
  }

};
