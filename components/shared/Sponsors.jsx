import React from "react";
import Skeleton from "react-loading-skeleton";
import useFetch from "../../hooks/useFetch";

const Sponsors = () => {
  const baseURL = process.env.CMS_URL;
  const { data, loading } = useFetch(`${baseURL}/sponsors?sort=Order:ASC&populate=*`);

  if (loading) {
    return <Skeleton height={150} />;
  }

  return (
    <div className="py-10 font-redhat">
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-1 mb-5" />
      <div className="flex justify-center">
        <div className="flex flex-wrap overflow-x-auto lg:flex-nowrap justify-center items-center gap-6">
          {data?.data.map((sponsor, i) => (
            <div key={i} className="flex flex-col justify-center items-center gap-4 ">
              <img src={sponsor?.SponsorLogo?.url} alt="" className="w-fit max-h-24" />
              <h3 className="text-sm text-[#8C8C8C] text-center capitalize">{sponsor?.SponsorshipCategory}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
