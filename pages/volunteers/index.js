import React from "react";
import InnerSection from "../../components/volunteer/InnerSection";

import InnerSectionList from "../../components/volunteer/InnerSectionList";
import SideBar from "../../components/shared/SideBar";
import FixturesBrief from "../../components/shared/FixturesBrief";
import LatestNews from "../../components/volunteer/LatestNews";
import Image from "next/dist/client/image";

const volunteer = () => {
  let content = [
    {
      title: "Monoliga lener bede. Jutt lanas oaktat siktig.",
      img: "/volunteer-application.png",
      parag:
        "Lörem ipsum jen öling tede den geosorade lalig så sagen om terralog burkini om plagen, ifall aktig inte leda krosäbelt.",

      lower: "Join now",
      arrow: "/arrow 1.png",
    },
    {
      title: "Monoliga lener bede. Jutt lanas oaktat siktig.",
      img: "/volunteer-banner.png",
      parag:
        "Todat spessa. Trelott osyr digår. Hexang miska vol. Kronat pebel tisat. Sasam mikrosat pabel. Rev  avonade vas. Synskop ira: och monoledes.",
      lower: "",
      arrow: "",
    },
    {
      title: "Monoliga lener bede. Jutt lanas oaktat siktig.",
      img: "/fem-volunteers.png",
      parag:
        "Todat spessa. Trelott osyr digår. Hexang miska vol. Kronat pebel tisat. Sasam mikrosat pabel. Rev  avonade vas. Synskop ira: och monoledes.",
      lower: "Get your certificate",
      arrow: "/arrow 1.png",
    },
  ];

  return (
    <div className=" ">
      <div className="max-w-[94%] md:max-w-[90%] mx-auto  py-8 lg:pb-3 h-auto   ">
        <div className="flex gap-5 xl:gap-8 justify-between ">
          <div className="w-full lg:w-8/12 xl:w-9/12 ">
            <div className=" pb-[10vh] md:pb-[35vh] lg:pb-[25vh] ">
              <div className="">
                <div>
                  <Image
                    src="/Lets-start.png"
                    alt=""
                    width="100%"
                    height="40vh"
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
                <p className="text-black mt-8 leading-8 md:w-[85%]">
                  {" "}
                  Lörem ipsum jen öling tede den geosorade lalig så sagen om terralog burkini om plagen, ifall vaktig
                  inte leda krosäbelt. Myjygon pongen i lelig än trel, memil lede antent och psykocism epud lagir för
                  lada. Pätärat presper, i hust netugisk mytodiktisk häkuss som biopur i geling pitt vartad vaplajigon
                  tägåst och hypodalogi. Såsoning åren tektiga bioment, eumisamma, sunäligen med astropp om kvasiras,
                  läslov, lapp dabesk om las. Nina tesm tok tekubel epiras, i dissade engar stenolans: miktig didorad
                  sosal.
                </p>
              </div>
            </div>
            <div className="     ">
              <div className="mb-2 lg:mb-0 ">
                <div>
                  <Image
                    src="/volunteer-force.png"
                    alt=""
                    width="100%"
                    height="50vh"
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
                <p className="text-black mt-8 leading-8 md:w-[85%]">
                  Lörem ipsum jen öling tede den geosorade lalig så sagen om terralog burkini om plagen, ifall vaktig
                  inte leda krosäbelt. Myjygon pongen i lelig än trel, memil lede antent och psykocism epud lagir för
                  lada. Pätärat presper, i hust netugisk mytodiktisk häkuss som biopur i geling pitt vartad vaplajigon
                  tägåst och hypodalogi.
                </p>
              </div>

              <div className="flex flex-col gap-6    mb-8  mt-5   ">
                <div className="    ">
                  {content.map(({ img, parag, lower, arrow, title }, ind) => {
                    return (
                      <div>
                        <InnerSection title={title} img={img} parag={parag} lower={lower} arrow={arrow} key={ind} />
                      </div>
                    );
                  })}
                </div>

                {/* <div className="   ">
                  <InnerSectionList
                    title="Monoliga lener bede. Jutt lanas oaktat siktig."
                    img="/volunteer-banner.png"
                    list1="Tingar endoplastisk."
                    list2=" Donade letungen en treter och "
                    list3="Pararysk blingbling sperad."
                   
                  />
                </div> */}
              </div>
            </div>
          </div>

          <div className="hidden lg:block w-4/12 xl:w-3/12  p-0">
            <div>
              <LatestNews />
            </div>
            <div>
              <FixturesBrief />
            </div>
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default volunteer;
