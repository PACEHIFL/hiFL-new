import React from "react";
import Link from "next/link";
import Image from "next/image";
import useFetch from "../../hooks/useFetch";

const LatestNews = () => {
  const baseURL = process.env.CMS_URL;
  const { data, loading } = useFetch(
    `${baseURL}/posts?sort=PublishDate:DESC&filters[$and][0][categories][CategoryName][$eq]=News&populate=*`
  );

  return (
    <div className=" h-full text-black mb-6">
      <div className="p-0  ">
        <div className="flex justify-between items-center py-0">
          <h2 className="text-[#000229] font-bold text-lg font-redhat py-0">Latest News</h2>
          <Link href="/news">
            <a className="flex gap-2 text-sm font-bold">
              <span>View All</span>
              <Image src="/right-arrow.png" alt="" width={11} height={14} />
            </a>
          </Link>
        </div>

        <div className="flex flex-col gap-5 text-sm font-redhat justify-end h-auto border-t border-[#D0D0D0] pt-5 mt-5">
          {data?.data.slice(0, 3).map(({ id, Title, CoverImage, categories, Excerpt }, i) => (
            <Link href="#" key={i}>
              <a className="flex gap-3 items-center" key={i}>
                <div className="w-5/12">
                  <img src={CoverImage?.url} alt={Title} />
                </div>
                <div className="w-7/12">
                  <p className="px-1 w-full text-[0.9rem]">{Title}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
