import React from "react";
import Image from "next/image";

const Sponsors = () => {
  const minorSponsors = [
    { img: "/stanbic.png", title: "Official Financial Partner" },
    { img: "/nivea.png", title: "Official Deodorant Partner" },
    { img: "/bold.png", title: "Official Drink Partner" },
    { img: "/minimie.png", title: "Official Snack Partner" },
    { img: "/hiversa.png", title: "Official Educational Partner" },
  ];
  const majorSponsors = [
    { img: "/supersport.png", title: "" },
    { img: "/completesports.png", title: "" },
  ];
  return (
    <div className="bg-white py-10 font-redhat">
      <div className="max-w-[94%] md:max-w-[90%] mx-auto">
        <div className="flex gap-8 items-center divide-x-[1px] divide-[#D0D0D0]">
          <div className="flex justify-around items-center gap-6 w-8/12">
            {minorSponsors.map(({ img, title }, i) => (
              <div key={i} className="flex flex-col gap-2">
                <Image src={img} alt="" width="100%" height="100%" objectFit="contain" />
                <h3 className="text-xs text-[#8C8C8C] text-center">{title}</h3>
              </div>
            ))}
          </div>
          <div className="flex justify-around items-center gap-6 w-4/12">
            {majorSponsors.map(({ img, title }, i) => (
              <div key={i}>
                <Image src={img} alt="" width="100%" height="100%" objectFit="contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
