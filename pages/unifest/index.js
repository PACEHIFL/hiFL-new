import React from "react";
import InnerSection from "../../components/volunteer/InnerSection";
import SideBar from "../../components/shared/SideBar";
import FixturesBrief from "../../components/shared/FixturesBrief";
import LatestNews from "../../components/volunteer/LatestNews";
import Image from "next/image";

const Unifest = () => {
  const content = [
    {
      title: "Stage 1",
      img: "/volunteer-application.png",
      parag:
        "Participants to send in a 30 to 60 seconds video of themselves in any of the four talent categories and get nominated to subsequent stages",
      item: "",
      lower: "Participate",
      arrow: "/arrow 1.png",
    },
    {
      title: "Stage 2",
      img: "/fem-volunteers.png",
      parag: "12 contestants will be selected and profiled. The top 4 will proceed to the final stage.",
      item: "",
      lower: "Participate",
      arrow: "/arrow 1.png",
    },
    {
      title: "Stage 3",
      img: "/volunteer-banner.png",
      parag:
        "Top 4 contestants will be mentored and will thereafter proceed to vibe for the winning performance. One winner will emerge.",
      item: "",
      lower: "Participate",
      arrow: "/arrow 1.png",
    },

    {
      title: "Prices to be won",
      img: "/fem-volunteers.png",
      item: [
        {
          list: "An opportunity to perform at HiFL special events broadcasted across Africa.",
        },
        { list: "A year talent management deal." },
        { list: "N100k cash prize." },
      ],
      parag: "",
      lower: "Participate",
      arrow: "/arrow 1.png",
    },
  ];

  return (
    <div className="font-redhat">
      <div className="max-w-[94%] lg:max-w-[90%] mx-auto  lg:pb-3 h-auto md:w-[85%]  ">
        <div className="flex gap-5 xl:gap-8 justify-between  ">
          <div className="w-full lg:w-8/12 xl:w-9/12 ">
            <div className=" pb-8 md:pb-8 lg:pb-8 ">
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
                <div className="text-black mt-8 md:w-[90%] lg:w-[85%]">
                  <h1 className="font-bold lg:text-2xl sm:mb-2 sm:text-xl">HiFL Unifest 2022</h1>
                  <p>
                    UniFest is an exciting platform which discovers and showcases talents from higher institutions
                    across Nigeria. The competition offers an opportunity for special talents to perform at HiFL special
                    events which will be broadcasted across Africa.
                  </p>
                </div>
              </div>
            </div>
            <div className="     ">
              <div className="mb-8  lg:mb-8  ">
                <div>
                  <Image
                    src="/Contestants.png"
                    alt=""
                    width="100%"
                    height="50vh"
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
                <div className="text-black mt-8 md:w-[90%] lg:w-[85%]">
                  <div className="mb-3">
                    <h1 className=" font-bold lg:text-2xl sm:mb-2 sm:text-xl ">Who can participate ?</h1>
                    <p>UniFest is open to talented and interested students from all Higher institutions in Nigeria.</p>
                  </div>
                  <div className="mb-3">
                    <h1 className=" font-bold lg:text-2xl sm:mb-2 sm:text-xl ">How to join</h1>
                    <p>
                      {" "}
                      Record a 30 to 60 seconds video of yourself in any of the four categories. Upload your video on
                      Instagram and tag @Unifest_ng using the hashtag #HiFLUniFest2022.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6    mb-8  mt-5   ">
                <div className="    ">
                  {content.map(({ img, parag, lower, arrow, title, item }, ind) => {
                    return (
                      <div key={ind}>
                        <InnerSection
                          title={title}
                          img={img}
                          item={item}
                          lower={lower}
                          arrow={arrow}
                          key={ind}
                          parag={parag}
                        />
                      </div>
                    );
                  })}
                </div>
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

export default Unifest;
