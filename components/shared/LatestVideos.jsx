import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ReactPlayer from "react-player/youtube";

const videos = [
  { img: "/news.png", desc: "HiFL 2021: Unimaid Desert Warriors, AAUA Luminaries qualify for finals", link: "#" },
  { img: "/news.png", desc: "HiFL 2021: Unimaid Desert Warriors, AAUA Luminaries qualify for finals", link: "#" },
  { img: "/news.png", desc: "HiFL 2021: Unimaid Desert Warriors, AAUA Luminaries qualify for finals", link: "#" },
  { img: "/news.png", desc: "HiFL 2021: Unimaid Desert Warriors, AAUA Luminaries qualify for finals", link: "#" },
];

const LatestVideos = () => {
  const [isLoading, setIsLoading] = useState(true);

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
        <div className="w-full h-[350px] md:h-auto md:w-1/2">
          <div className="h-[60%]">
            {!isLoading && (
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                controls={true}
                light="/news.png"
                width="100%"
                height="100%"
                playIcon={<img src="/play.png" alt="" width="10%" />}
              />
            )}
          </div>
          <div className="h-[40%] bg-[url('/videos-bg.png')] bg-cover flex items-center">
            <div className="text-white px-6">
              <h2 className="text-lg font-bold mb-2">Best skills of Matchday 8</h2>
              <p className="text-sm font-extralight pt-1 max-w-[70%]">
                HiFL 2021: Unimaid Desert Warriors, AAUA Luminaries qualify for finals
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full md:w-1/2">
          {!isLoading &&
            videos.slice(0, 4).map(({ img, desc, link }, i) => (
              <div className="flex flex-row md:flex-col items-center gap-2" key={i}>
                <div className="w-1/2 md:w-full h-auto">
                  {/* <Image src={img} alt="" width="100%" height="60%" layout="responsive" objectFit="cover" /> */}
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                    controls={true}
                    light="/news.png"
                    width="100%"
                    height="135px"
                    playIcon={<img src="/play.png" alt="" width="13%" />}
                  />
                </div>
                <p className="text-xs font-extralight pt-1 w-[75%] md:w-full">{desc}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LatestVideos;
