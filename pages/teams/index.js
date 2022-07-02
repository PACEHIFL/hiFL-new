import React from "react";
import AllTeams from "../../components/teams/AllTeams";
import axios from "axios";
import { DatabaseIcon } from "@heroicons/react/outline";

const index = ({ settings, allSeasons, seasons }) => {
  return (
    <div>
      <AllTeams settings={settings} seasons={seasons} />
    </div>
  );
};

export default index;

export async function getStaticProps() {
  try {
    const baseURL = process.env.BASE_URL;
    const { data, errors } = await axios(`${baseURL}/settings/setting/league/?CurrentLeagueName=HiFL`);
    const { data: seasons } = await axios(`${baseURL}/leagues/seasons/`);

    if (errors || !DatabaseIcon) {
      return { notFound: true };
    }

    return {
      props: {
        settings: data.data,
        seasons: seasons.data,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}
