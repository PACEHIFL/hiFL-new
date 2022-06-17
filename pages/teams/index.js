import React from "react";
import AllTeams from "../../components/teams/AllTeams";
import axios from "axios";

const index = ({ data, allSeasons }) => {

  return (
    <div>
      <AllTeams data={data} allSeasons={allSeasons} />
    </div>
  );
};

export default index;

export async function getStaticProps() {
  try {
    const baseURL = process.env.BASE_URL;
    const { data, errors } = await axios(`${baseURL}/teams/all/`);
    const { data: allSeasons } = await axios(`${baseURL}/leagues/seasons`);


    if (errors || !data) {
      return { notFound: true };
    }

    return {
      props: {
        data: data.data,
        allSeasons
      },
    };
  } catch (error) {
    return { notFound: true };
  }

}
