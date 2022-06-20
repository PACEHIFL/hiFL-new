import Image from "next/image";
import React from "react";
import Link from "next/link";
import useFetch from "../../hooks/useFetch";
import Skeleton from "react-loading-skeleton";

const HeadlinesCard = () => {
  const baseURL = process.env.CMS_URL;
  const { data, loading } = useFetch(
    `${baseURL}/posts?sort=PublishDate:DESC&filters[$and][0][categories][CategoryName][$eq]=Headlines&populate=*`
  );

  return (
    <div className="bg-accent h-full text-white">
      <div className="p-5">
        <h2 className="text-white font-bold text-lg mb-5 font-redhat">Headlines</h2>
        <div className="flex flex-col gap-5 text-sm font-redhat justify-end h-auto">
          {data?.data.slice(0, 3).map(({ Excerpt, CoverImage, Title, id }, i) => (
            <Link href={`/news/${id}`} key={i}>
              <a className="flex gap-3 items-center" key={i}>
                <div className="w-5/12">
                  <img src={CoverImage?.url} alt={Title} className="w-full" />
                </div>
                <div className="w-7/12">
                  <div className="px-1 w-full text-[0.9rem]">{Title}</div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeadlinesCard;
