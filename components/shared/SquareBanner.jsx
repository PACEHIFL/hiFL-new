import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import useFetch from "../../hooks/useFetch";

const SquareBanner = () => {
  const [randomIndex, setRandomIndex] = useState(0);
  const baseURL = process.env.CMS_URL;
  const { data, loading } = useFetch(
    `${baseURL}/adverts/?filters[$and][0][Active][$eq]=true&filters[$and][1][Position][$eq]=Sidebar&populate=*`
  );

  useEffect(() => {
    setInterval(() => {
      setRandomIndex(Math.floor(Math.random() * data?.data?.length));
    }, 20000);
  });

  if (loading) {
    return <Skeleton height={400} />;
  }
  return (
    <a className="rounded" href={data?.data[randomIndex]?.Link} target="_blank" rel="noreferrer">
      <img src={data?.data[randomIndex]?.AdvertImage[0]?.url} alt="" className="object-cover w-full" />
    </a>
  );
};

export default SquareBanner;
