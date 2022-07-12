import React from "react";
import Image from "next/image";
import Link from "next/link";
import useFetch from "../../hooks/useFetch";

const FeaturedSchool = () => {
  const baseURL = process.env.CMS_URL;
  const { data, loading } = useFetch(`${baseURL}/feature-team?populate=*`);

  console.log(data);

  return (
    <div className="bg-white rounded border shadow">
      <h2 className="text-[#000229] font-bold text-sm  font-redhat p-3">Featured School</h2>

      <div className="mb-1 relative mx-3">
        <div className="rounded  h-[200px] w-full flex flex-col justify-end text-white font-redhat pl-5 text-xs relative z-10 pb-2">
          {/* <p className="font-bold">{data?.data?.InstitutionName}</p> */}
        </div>
        <img
          src={data ? data?.data?.CoverImage?.url : "/default-team-logo.png"}
          alt=""
          className="absolute h-full w-full top-0 object-cover object-top"
        />
        {/* <div className="absolute bg-black h-8 w-full bottom-0 opacity-50" /> */}
      </div>

      <div className="text-sm font-redhat">
        <div className="flex justify-between items-center py-1 px-3 border-b">
          <p>School</p>
          <div className="flex gap-3 items-center">
            <h3 className="font-bold text-sm">{data?.data?.Content?.Institution}</h3>
            <img
              src={data?.data?.Content?.TeamLogo ? data?.data?.Content?.TeamLogo : "/default-team-logo.png"}
              alt=""
              width={27}
              height={27}
            />
          </div>
        </div>
        <div className="flex justify-between items-center py-1 px-3 border-b">
          <p>League Won</p>
          <p>{data?.data?.Content?.LeagueWon}</p>
        </div>
        <div className="flex justify-between items-center py-1 px-3 border-b">
          <p>Goals</p>
          <p>{data?.data?.Content?.Goals}</p>
        </div>
        <div className="flex justify-between items-center py-1 px-3 border-b">
          <p>Yellow Card</p>
          <p>{data?.data?.Content?.YellowCard}</p>
        </div>
        <div className="flex justify-between items-center py-1 px-3 border-b">
          <p>Team Name</p>
          <p>{data?.data?.Content?.TeamName}</p>
        </div>
      </div>

      {/* <div className="flex justify-end text-sm">
        <Link href="#">
          <a className="flex gap-2 py-2 px-3 font-redhat">
            <span>School Profile</span>
            <Image src="/right-arrow.png" alt="" width={11} height={14} />
          </a>
        </Link>
      </div> */}
    </div>
  );
};

export default FeaturedSchool;
