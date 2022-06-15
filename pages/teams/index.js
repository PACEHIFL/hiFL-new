import React from "react";
import AllTeams from "../../components/teams/AllTeams";
import axios from "axios";

const index = ({ data }) => {
  console
  return (
    <div>
      <AllTeams data={data} />
    </div>
  );
};

export default index;

export async function getStaticProps() {
  try {
    const baseURL = process.env.BASE_URL;
    const { data, errors } = await axios(`${baseURL}/teams/all`);

    if (errors || !data) {
      return { notFound: true };
    }

    return {
      props: {
        data: data.data,
      },
    };
  } catch (error) {
    return { notFound: true };
  }

}
