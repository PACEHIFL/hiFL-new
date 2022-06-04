import React from "react";
import Image from "next/image";
import Link from "next/link";

const LatestNews = () => {
  const news = [
    {
      img: "/news.png",
      type: "Latest News",
      title: "HiFL 2021: Unimaid Desert Warriors, AAUA Luminaries qualify for finals",
      desc: "HiFL 2021: Unimaid Desert Warriors, AAUA Luminaries qualify for finals",
      link: "#",
    },
    {
      img: "/news.png",
      type: "News",
      title: "Unimaid beat Futminna 1-0 as UNN walk tight rope",
      desc: "HiFL 2021: Unimaid Desert Warriors, AAUA Luminaries qualify for finals",
      link: "#",
    },
    {
      img: "/news.png",
      type: "Referees",
      title: "Unimaid beat Futminna 1-0 as UNN walk tight rope",
      desc: "HiFL 2021: Unimaid Desert Warriors, AAUA Luminaries qualify for finals",
      link: "#",
    },
  ];

  return (
    <div className="border border-x-0 border-[#D0D0D0] font-redhat text-[#000229] pb-8">
      <div className="flex justify-between items-center py-2">
        <h2 className="text-[#000229] font-bold text-lg font-redhat py-3">Latest News</h2>
        <Link href="/news">
          <a className="flex gap-2 text-sm font-bold">
            <span>View All</span>
            <Image src="/right-arrow.png" alt="" width={11} height={14} />
          </a>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-2 justify-between">
        {news.slice(0, 5).map(({ img, type, title, desc, link }, i) => (
          <Link href={link} key={i}>
            <a className="w-full">
              <Image src={img} alt="" width="100%" height="60%" layout="responsive" objectFit="cover" />
              <h3 className="text-accent font-bold italic text-xs py-1">{type}</h3>
              <h2 className="text-sm font-semibold">{title}</h2>
              <p className="text-xs font-extralight pt-1">{desc}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
