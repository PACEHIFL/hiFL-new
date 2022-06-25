import React, { useState, useEffect } from "react";
import SideBar from "../../components/shared/SideBar";
import LatestNews from "../shared/LatestNews";
import LatestVideos from "../shared/LatestVideos";
// import Sponsors from "../shared/Sponsors";
import OfficialInfo from "./OfficialInfo";
import axios from "axios";
import { BeatLoader } from "react-spinners";

const Overview = ({ data: { Overview, _id }, loading }) => {
  const [officials, setOfficiails] = useState();

   const fetchData = async () => {
      const baseURL = process.env.BASE_URL;
      const { data } = await axios(`${baseURL}/officials/?Team=${_id}`);
      setOfficiails(data?.data);
    };

  useEffect(() => {
    if(_id) {
      fetchData();
    }
  }, [_id]);

  return (
    <div>
      <div className="flex gap-5 xl:gap-8 justify-between font-redhat">
        <div className="w-full lg:w-8/12 xl:w-9/12">
          <h1 className="text-base md:text-xl w-[80%] pb-6 leading-7">{Overview}</h1>
          <div className="mb-10">
            <h1 className="font-bold text-4xl pb-4">Officials</h1>

            {loading && (
              <div className="h-[400px] flex justify-center items-center">
                <BeatLoader loading={loading} color="#000229" />
              </div>
            )}

            {officials?.length !== 0 ? 
              officials?.map((official, idx) => <OfficialInfo data={official} key={idx} />)
            : (
              <h1> No officials yet... </h1>
            )}
          </div>
          <hr />
          <LatestNews />
          <LatestVideos />
        </div>
        <div className="hidden lg:block w-4/12 xl:w-3/12">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default Overview;
