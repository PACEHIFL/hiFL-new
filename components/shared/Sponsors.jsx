import React from "react";
import Image from "next/image";

const Sponsors = () => {
  const officialSponsors = [
    { img: "/stanbic.png", title: "Official Financial Partner" },
    { img: "/nivea.png", title: "Official Deodorant Partner" },
    { img: "/bold.png", title: "Official Drink Partner" },
    { img: "/minimie.png", title: "Official Snack Partner" },
    { img: "/hiversa.png", title: "Official Educational Partner" },
    { img: "/supersport.png", title: "Official TV Partner" },
    { img: "/brila.png", title: "Official Radio Partner" },
    { img: "/completesports.png", title: "Official Print Partner" },
  ];

  return (
    <div className="py-10 font-redhat">
      <div className="flex justify-center">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-6">
          {officialSponsors.map(({ img, title }, i) => (
            <div key={i} className="flex flex-col items-center gap-4 ">
              <img src={img} alt="" className="w-fit" />
              <h3 className="text-xs text-[#8C8C8C] text-center">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
