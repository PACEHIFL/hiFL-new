import React from "react";
import Link from "next/link";

const VolunteerResources = () => {
  const news = [
    {
      img: "/news.png",
      type: "Entrepreneurship",
      title: "5 Skills you need to succeed as an entreprenuer",
      desc: "HiFL 2021: Unimaid Desert Warriors, AAUA Luminaries qualify for finals",
      link: "this",
    },
    {
      img: "/news.png",
      type: "Business",
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
    {
      img: "/news.png",
      type: "Referees",
      title: "Unimaid beat Futminna 1-0 as UNN walk tight rope",
      desc: "HiFL 2021: Unimaid Desert Warriors, AAUA Luminaries qualify for finals",
      link: "#",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5">
      {news.map(({ img, type, title, link }, i) => (
        <div key={i}>
          <img src={img} alt={title} className="w-full" />
          <h3 className="text-accent italic text-sm pt-1">{type}</h3>
          <h2 className="py-2">{title}</h2>
          <Link href={`/blog/${link}`}>
            <a>
              <button className="btn btn-secondary text-white capitalize">Continue reading</button>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default VolunteerResources;
