import React from "react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import useFetch from "../../hooks/useFetch";

const HighlightsCard = () => {
  const baseURL = process.env.CMS_URL;
  const { data, loading } = useFetch(
    `${baseURL}/posts?sort=PublishDate:DESC&filters[$and][0][categories][CategoryName][$eq]=Featured&populate=*`
  );

  if (loading) {
    return <Skeleton height={400} />;
  }

  return (
    <Link href={`/blog/${data?.data[0].id}`}>
      <a
        className={` flex flex-col justify-end bg-cover bg-center min-h-[400px] h-full`}
        style={{ backgroundImage: `url(${data?.data[0].CoverImage.url})` }}>
        <h2 className="p-5 bg-black bg-opacity-40 shadow shadow-black text-white py-3 font-redhat font-bold text-base">
          {data?.data[0].Title}
        </h2>
      </a>
    </Link>
  );
};

export default HighlightsCard;
