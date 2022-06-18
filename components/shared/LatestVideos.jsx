import React, { useState, useEffect } from "react";
import Link from "next/link";
import ReactPlayer from "react-player/youtube";
import useFetch from "../../hooks/useFetch";

const videos = [
  { img: "/news.png", desc: "HiFL 2021: Unimaid Desert Warriors, AAUA Luminaries qualify for finals", link: "#" },
  { img: "/news.png", desc: "HiFL 2021: Unimaid Desert Warriors, AAUA Luminaries qualify for finals", link: "#" },
  { img: "/news.png", desc: "HiFL 2021: Unimaid Desert Warriors, AAUA Luminaries qualify for finals", link: "#" },
  { img: "/news.png", desc: "HiFL 2021: Unimaid Desert Warriors, AAUA Luminaries qualify for finals", link: "#" },
];

const LatestVideos = () => {
  const [isLoading, setIsLoading] = useState(true);

  const baseURL = process.env.CMS_URL;
  const { data, loading } = useFetch(
    `${baseURL}/posts?sort=PublishDate:DESC&filters[$and][0][Type][$eq]=Video&populate=*`
  );

  console.log(data);

  useEffect(() => {
    setIsLoading(false);
  }, []);

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
        <div className="w-full h-[300px] md:h-auto md:w-1/2">
          <div className="h-[60%]">
            {!isLoading && data && (
              <ReactPlayer
                url={data?.data[0].Media[0].url}
                // controls={true}
                // light={data?.data[0].CoverImage.url}
                width="100%"
                // playIcon={<img src="/play.png" alt="" width="40px" />}
              />
            )}
          </div>
          <Link href={`/videos/${data?.data[0].id}`}>
            <a className="h-[40%] bg-[url('/videos-bg.png')] bg-cover flex items-center">
              <div className="text-white px-6">
                <h2 className="text-lg font-bold mb-2">{data?.data[0].Title}</h2>
                <div
                  className="text-sm font-extralight pt-1 max-w-[70%]"
                  dangerouslySetInnerHTML={{ __html: data?.data[0].Excerpt }}
                />
              </div>
            </a>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full md:w-1/2">
          {!isLoading &&
            data?.data.slice(0, 4).map(({ id, Title, CoverImage, Media }, i) => (
              <div className="flex flex-row md:flex-col items-center gap-2" key={i}>
                <div className="w-1/2 md:w-full h-auto">
                  {/* <Image src={img} alt="" width="100%" height="60%" layout="responsive" objectFit="cover" /> */}
                  <ReactPlayer
                    url={Media?.[0].url}
                    controls={true}
                    light={CoverImage.url}
                    width="100%"
                    height="200px"
                    playIcon={<img src="/play.png" alt="" width="30px" />}
                  />
                </div>
                <Link href={`/videos/${id}`}>
                  <a className="text-xs font-extralight pt-1 w-[75%] md:w-full">{Title}</a>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LatestVideos;
