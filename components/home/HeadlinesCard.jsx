import Image from "next/image";
import React from "react";
import Link from "next/link";

const HeadlinesCard = () => {
  const headlines = [
    { img: "/headline-img.png", desc: "Unical Malabites secures first place in round of 16" },
    { img: "/headline-img.png", desc: "Small Doctor closes the Final 4 with a memorable ceremony" },
    { img: "/headline-img.png", desc: "LaLiga presents HiFL the iconic soccer balls for matches" },
    { img: "/headline-img.png", desc: "Unical Malabites becomes the winners of the 2019 HiFL final" },
  ];

  return (
    <div className="bg-accent h-full text-white">
      <div className="p-5">
        <h2 className="text-white font-bold text-lg mb-5 font-redhat">Headlines</h2>
        <div className="flex flex-col gap-1 text-sm font-redhat justify-end h-full">
          {headlines.map(({ img, desc }, i) => (
            <Link href="#" key={i}>
              <a className="flex gap-3 items-center" key={i}>
                <div className="">
                  <Image src={img} alt="" width={158} height={100} />
                </div>
                <p className="px-1 w-full">{desc}</p>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeadlinesCard;
