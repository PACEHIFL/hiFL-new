import { useState, useEffect } from "react";
import Link from "next/link";

const Accordion = ({ title, data }) => {
  return (
    <div className="mb-10 ">
      {/* <h1 className="text-[30px] font-bold">{title}</h1> */}
      <h1 className="text-lg text-black font-bold">STAGES OF THE COMPETITION</h1>
      <div>
        {data?.map((item, idx) => (
          <details key={idx} className="my-4 cursor-pointer  ">
            <summary className='bg-[url("/volunteer-bg.png")] bg-cover bg-no-repeat mix-blend-darken bg-[#000229] bg-top text-lg font-semibold text-[#F4C316]  py-3 px-4 rounded-sm '>
              {item.title}
            </summary>

            <div className="py-3 border-x border-b p-4 bg-white text-black ">
              <div className="w-[90%] ">
                {item.description}

                <div className="cursor-pointer mt-3 text-[12px] text-white flex    align-middle justify-between  ">
                  {idx === 2 ? (
                    <Link href="/unifest" className="">
                      <button className="bg-[#000229] px-8 py-2 rounded text-sm">participate</button>
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
