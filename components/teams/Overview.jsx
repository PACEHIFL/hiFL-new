import React, { useState, useEffect } from "react";
import SideBar from "../../components/shared/SideBar";
import LatestNews from "../shared/LatestNews";
import LatestVideos from "../shared/LatestVideos";
import Sponsors from "../shared/Sponsors";
import OfficialInfo from "./OfficialInfo";
import axios from "axios";

const Overview = ({ data: { Overview, _id } }) => {
  const [officials, setOfficiails] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const baseURL = process.env.BASE_URL;
      const { data } = await axios(`${baseURL}/officials/?Team=${_id}`);
      setOfficiails(data.data);
    };

    fetchData().catch(console.error);
  }, [_id]);

  return (
    <div>
      <div className="flex gap-5 xl:gap-8 justify-between font-redhat">
        <div className="w-full lg:w-8/12 xl:w-9/12">
          <h1 className="text-base md:text-xl px-5 w-[80%] pb-6 leading-7 text-justify">{Overview}</h1>
          <div className="mb-10">
            <h1 className="font-bold text-4xl pb-4">Officials</h1>

            {officials?.map((official, idx) => (
              <OfficialInfo data={official} key={idx} />
            ))}
          </div>

          <hr />

          <LatestNews />
          <LatestVideos />
        </div>
        <div className="hidden lg:block w-4/12 xl:w-3/12">
          <SideBar />
        </div>
      </div>

      <div className="bg-white">
        <div className="h-1 mt-10 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        <div className="max-w-[94%] md:max-w-[90%] mx-auto">
          <Sponsors />
        </div>
      </div>
    </div>
  );
};

export default Overview;
