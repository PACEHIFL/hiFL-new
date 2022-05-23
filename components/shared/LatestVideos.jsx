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
            <Image src="/right-arrow.png" alt="" width={11} height={14} />
          </a>
        </Link>
      </div>
      <div className="flex gap-2">
        <div className="w-1/2 h-auto">
          <div className="h-[60%]">
            {!isLoading && (
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                controls={true}
                light="/news.png"
                width="100%"
                height="100%"
                playIcon={<Image src="/play.png" alt="" width="54" height="62" />}
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
        <div className="grid grid-cols-2 gap-2 w-1/2">
          {videos.map(({ img, desc, link }, i) => (
            <div className="" key={i}>
              <Image src={img} alt="" width="100%" height="60%" layout="responsive" objectFit="cover" />
              <p className="text-xs font-extralight pt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestVideos;
