import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useFetch from "../../../hooks/useFetch";
import TeamPlayer from "../../../components/teams/TeamPlayer";
import axios from "axios";

const Profile = () => {
  const router = useRouter();
  const teamId = router.query.id;

  const baseURL = process.env.BASE_URL;
  const { data, loading } = useFetch(`${baseURL}/players/active/?Team=${teamId}`);
  const { data: team } = useFetch(`${baseURL}/teams/team/?_id=${teamId}`);

  return (
    <div className="bg-white font-redhat">
      <div className="max-w-[94%] md:max-w-[90%] mx-auto py-10 text-black">
        <img src="/hifl-logo.png" alt="" className="mx-auto mb-10" />
        <h1 className="text-3xl text-center mb-10 font-bold">{team?.data?.Institution?.InstitutionName} </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {data?.data?.length != 0 ? (
            data?.data?.map((player, idx) => <TeamPlayer key={idx} player={player} />)
          ) : (
            <h1 className="my-10 text-xl font-semibold"> No current active players </h1>
          )}
        </div>
      </div>
      ￼ ￼
    </div>
  );
};

export default Profile;
