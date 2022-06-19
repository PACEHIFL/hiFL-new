import React from "react";
import Skeleton from "react-loading-skeleton";
import useFetch from "../../hooks/useFetch";

const Sponsors = () => {
  const baseURL = process.env.CMS_URL;
  const { data, loading } = useFetch(`${baseURL}/sponsors?populate=*`);

  if (loading) {
    return <Skeleton height={400} />;
  }

  return (
    <div className="py-10 font-redhat">
      <div className="flex justify-center">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-6">
          {data?.data.map((sponsor, i) => (
            <div key={i} className="flex flex-col items-center gap-4 ">
              <img src={sponsor?.SponsorLogo?.url} alt="" className="w-fit h-24" />
              <h3 className="text-sm text-[#8C8C8C] text-center capitalize">{sponsor?.SponsorName}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
