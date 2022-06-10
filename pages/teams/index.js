import React from "react";
import AllTeams from "../../components/teams/AllTeams";
import axios from "axios";

const index = ({ data }) => {
  return (
    <div>
      <AllTeams data={data} />
    </div>
  );
};

export default index;

export async function getStaticProps() {
  const baseURL = process.env.BASE_URL_LOCAL;
  const { data } = await axios(`${baseURL}/teams/all`);

  return {
    props: {
      data: data.data,
    },
  };
}
