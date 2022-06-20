import React from "react";
import Link from "next/link";
import Image from "next/image";
import useFetch from "../../hooks/useFetch";

const LatestNews = () => {
  const latestnews = [
    { img: "/headline-img.png", desc: "Unical Malabites secures first place in round of 16" },
    { img: "/headline-img.png", desc: "Small Doctor closes the Final 4 with a memorable ceremony" },
    { img: "/headline-img.png", desc: "LaLiga presents HiFL the iconic soccer balls for matches" },
  ];

  return (
    <div className=" h-full text-black">
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
          {latestnews.map(({ img, desc }, i) => (
            <Link href="#" key={i}>
              <a className="flex gap-3 items-center" key={i}>
                <div className="w-5/12">
                  <Image src={img} alt={desc} width="100%" height="70%" layout="responsive" objectFit="cover" />
                </div>
                <div className="w-7/12">
                  <p className="px-1 w-full text-[0.9rem]">{desc}</p>
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
