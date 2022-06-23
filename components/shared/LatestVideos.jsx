import React from "react";
import Link from "next/link";
import useFetch from "../../hooks/useFetch";
import Skeleton from "react-loading-skeleton";

const LatestVideos = () => {
  const baseURL = process.env.CMS_URL;
  const { data, loading } = useFetch(
    `${baseURL}/posts?sort=PublishDate:DESC&filters[$and][0][Type][$eq]=Video&populate=*`
  );

  return (
    <div className="border border-x-0 border-[#D0D0D0] font-redhat text-[#000229] pb-8">
      <div className="flex justify-between items-center py-2">
        <h2 className="text-[#000229] font-bold text-lg font-redhat py-3">Latest Videos</h2>
        <Link href="/videos">
          <a className="flex gap-2 text-sm font-bold">
            <span>View All</span>
            <img src="/right-arrow.png" alt="" />
          </a>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-2 h-full">
        {loading ? (
          <div className="w-full md:w-1/2">
            <Skeleton height={300} />
            <Skeleton height={100} />
          </div>
        ) : (
          <Link href={`/videos/${data?.data[0].id}`}>
            <a className="w-full  h-[300px] md:h-auto md:w-1/2">
              <div
                className="bg-cover h-[70%] flex justify-center items-center"
                style={{ backgroundImage: `url(${data?.data[0].CoverImage.url})` }}>
                <img src="/play.png" alt="" className="w-[50px]" />
              </div>
              <div className="h-[30%] bg-[url('/videos-bg.png')] bg-cover flex items-center">
                <div className="text-white px-6">
                  <h2 className="text-lg font-bold mb-1">{data?.data[0].Title}</h2>
                  {/* <div
                    className="text-sm font-extralight pt-1 max-w-[70%]"
                    dangerouslySetInnerHTML={{ __html: data?.data[0].Excerpt }}
                  /> */}
                  {data?.data[0].Excepts && (
                    <p className="text-sm font-extralight pt-1 max-w-[70%]">
                      {data?.data[0].Excepts?.substring(0, 100)}...
                    </p>
                  )}
                </div>
              </div>
            </a>
          </Link>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full md:w-1/2">
          {loading ? (
            <>
              <Skeleton height={200} />
              <Skeleton height={200} />
              <Skeleton height={200} />
              <Skeleton height={200} />
            </>
          ) : (
            data?.data.slice(1, data?.data.length).map(({ id, Title, CoverImage }, i) => (
              <Link href={`/videos/${id}`} key={i}>
                <a className="flex flex-row md:flex-col items-center md:items-start gap-2">
                  <div className="w-1/2 md:w-full relative">
                    <img src={CoverImage?.url} alt="" className="w-full object-cover" />
                    <img src="/play.png" alt="" className="w-[30px] absolute top-0 bottom-0 left-0 right-0 m-auto" />
                  </div>
                  <p className="text-xs text-left font-extralight pt-1">{Title.substring(0, 60)}...</p>
                </a>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestVideos;
