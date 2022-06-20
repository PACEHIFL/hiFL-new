import React from "react";
import TeamPlayer from "./TeamPlayer";
import LatestNews from "../shared/LatestNews";
import LatestVideos from "../shared/LatestVideos";

const Squad = ({ data }) => {
console.log(data)
  return (
    <div className="font-redhat">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {data.length != 0 ? (
          data?.map((player, idx) => <TeamPlayer key={idx} player={player} />)
        ) : (
          <h1 className="my-10 text-xl font-semibold"> No current active players </h1>
        )}
      </div>

      <div className="w-full lg:w-8/12 xl:w-9/12">
        <LatestNews />
        <LatestVideos />
      </div>
    </div>
  );
};

export default Squad;
