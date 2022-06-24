import React from "react";
import Link from "next/link";
import useFetch from "../../hooks/useFetch";
import PostsSkelenton from "../posts/PostsSkelenton";

const LatestNews = () => {
  const baseURL = process.env.CMS_URL;
  const { data, loading } = useFetch(
    `${baseURL}/posts?sort=PublishDate:DESC&filters[$and][0][categories][CategoryName][$eq]=News&populate=*`
  );

  return (
    <div className="border border-x-0 border-[#D0D0D0] font-redhat text-[#000229] pb-8">
      <div className="flex justify-between items-center py-2">
        <h2 className="text-[#000229] font-bold text-lg font-redhat py-3">Latest News</h2>
        <Link href="/news">
          <a className="flex gap-2 text-sm font-bold">
            <span>View All</span>
            <img src="/right-arrow.png" alt="" />
          </a>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-between">
        {loading ? (
          <>
            <PostsSkelenton />
            <PostsSkelenton />
            <PostsSkelenton />
          </>
        ) : (
          data?.data?.slice(0, 3).map(({ id, Title, CoverImage, categories, Excerpts }, i) => (
            <Link href={`/news/${id}`} key={i}>
              <a className="w-full rounded transition-transform hover:bg-[#f1f1f1] p-2 flex flex-col justify-between">
                <div>
                  <img src={CoverImage.url} alt={Title} className="w-full h-auto object-cover rounded-t" />
                  {/* <h3 className="text-accent font-bold italic text-xs py-1">{categories[0].CategoryName}</h3> */}
                  <h2 className="text-sm font-semibold mt-1" title={Title}>
                    {Title.substring(0, 80)}...
                  </h2>
                </div>
                {Excerpts && (
                  <p className="text-[#000229] text-xs font-extralight font-redhat pt-1 w-[300px]">
                    {Excerpts?.substring(0, 100)}...
                  </p>
                )}
              </a>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default LatestNews;
