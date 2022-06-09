import React from "react";
import Link from "next/link";
import Image from "next/image";

const PhotoGallery = () => {
  const news = [
    { img: "/news.png", desc: "HiFL 2021: Unimaid Desert Warriors, AAUA Luminaries qualify for finals", link: "#" },
    { img: "/news.png", desc: "HiFL 2021: Unimaid Desert Warriors, AAUA Luminaries qualify for finals", link: "#" },
    { img: "/news.png", desc: "HiFL 2021: Unimaid Desert Warriors, AAUA Luminaries qualify for finals", link: "#" },
    { img: "/news.png", desc: "HiFL 2021: Unimaid Desert Warriors, AAUA Luminaries qualify for finals", link: "#" },
  ];
  return (
    <div className="border-t border-[#D0D0D0] font-redhat text-[#000229] pb-8">
      <div className="flex justify-between items-center py-2">
        <h2 className="text-[#000229] font-bold text-lg font-redhat py-3">Photo Gallery</h2>
        <Link href="/gallery">
          <a className="flex gap-2 text-sm font-bold">
            <span>More Photos</span>
            <img src="/right-arrow.png" alt="" />
          </a>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-2 h-full">
        <Link href="#">
          <a className="w-full h-[350px] md:h-auto md:w-1/2">
            <div className="bg-[url('/playerrun.png')] bg-cover h-[60%]"></div>
            <div className="h-[40%] bg-[url('/gallery-bg.png')] bg-cover flex items-center">
              <div className="text-white px-6">
                <h2 className="text-lg font-bold mb-2">Best skills of Matchday 8</h2>
                <p className="text-sm font-extralight pt-1 max-w-[70%]">
                  HiFL 2021: Unimaid Desert Warriors, AAUA Luminaries qualify for finals
                </p>
              </div>
            </div>
          </a>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full md:w-1/2">
          {news.map(({ img, desc, link }, i) => (
            <Link href={link} key={i}>
              <a className="flex flex-row md:flex-col items-center gap-2">
                <div className="w-1/2 md:w-full">
                  <Image src={img} alt="" width="100%" height="60%" layout="responsive" objectFit="cover" />
                </div>
                <p className="text-xs font-extralight pt-1">{desc}</p>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
