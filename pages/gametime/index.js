import React from "react";
import InnerSection from "../../components/volunteer/InnerSection";
import Link from "next/link";
import InnerSectionList from "../../components/volunteer/InnerSectionMaster.jsx";
import SideBar from "../../components/shared/SideBar";
import FixturesBrief from "../../components/shared/FixturesBrief";
import LatestNews from "../../components/volunteer/LatestNews";
import Image from "next/image";

const GameTime = () => {
  const radio = [
    { channel: "Brilla FM", time: "Friday 4:30pm" },
    { channel: "Max FM", time: "Saturday 5:00pm" },
    { channel: "Abu Zaria FM", time: "Friday 5:30pm" },
    { channel: "Unizik FM", time: "Thursday 7:30pm" },
    { channel: "Unilorin FM", time: "Monday 7:45am" },
    { channel: "BUK FM", time: "Saturday 5:30pm" },
    { channel: "Diamond FM", time: "Saturday 4:30pm" },
  ];
  const tv = [
    { channel: "Supersport/DSTV", time: "Friday 9:00pm" },
    { channel: "TVC Network", time: "Saturday 6:00pm" },
    { channel: "Etv Enugu", time: "Saturday 5:00pm" },
    { channel: "ARTV Kano", time: "Sunday 5:00pm" },
  ];
  const contents = [
    {
      title: "Connect",
      img: "/volunteer-application.png",
      item: [
        { list: "With peers and like-minds in your schooland other campuses" },
        { list: "Also with fans,teams,partner brands and sponsors" },
      ],

      lower: "Join now",
      arrow: "/arrow 1.png",
      button: "",
      link: "/account?tab=volunteer-force",
    },
    {
      title: "Grow",
      img: "/fem-volunteerss.jpg",
      item: [
        { list: "Career advancement opportunities including internship and workplace prep" },
        { list: "Access to our extensive resource library for skills such as leadership,team bulding, marketing etc." },
        { list: "Opportunity to add value to your community." },
      ],
      lower: "",
      arrow: "",
      button: "",
      link: "",
    },
    {
      title: "Learn",
      img: "/volunteer-banner.png",
      item: [
        {
          list: "Practical field experience by working with experts",
        },
        { list: "Engagement on behalf of our partners and sponsors" },
      ],
      lower: "Get your certificate",
      arrow: "/arrow 1.png",
      button: "",
      link: "/account?tab=volunteer-force",
    },

    {
      title: "Gain",
      img: "/fem-volunteerss.jpg",
      item: "",
      parag:
        "Benefits including certificates, branded souvenirs/mechandise,exclusive promotional giveaways, backstage passes to special events",
      lower: "",
      arrow: "",
      button: "",
      link: "",
    },
  ];

  return (
    <div className="font-redhat ">
      <div className="max-w-[94%] lg:max-w-[90%] mx-auto   lg:pb-3 h-auto md:w-[85%]  ">
        <div className="flex gap-5 xl:gap-8 justify-between  ">
          <div className="w-full lg:w-8/12 xl:w-9/12 ">
            <div className=" pb-8 md:pb-8 lg:pb-8 ">
              <div className="">
                <div>
                  <Image
                    src="/gametime-cover.jpg"
                    alt=""
                    width="100%"
                    height="40vh"
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
                <div className="text-black mt-8 md:w-[90%] lg:w-[85%]">
                  <div className="mb-5">
                    <h1 className=" font-bold lg:text-2xl sm:mb-2 sm:text-xl ">Gametime</h1>
                    <p>
                      Gametime is a TV, E-zine, Radio Magazine programme. It’s the largest youth engagement and
                      connection programme in the country that is driven by HiSL, Nigeria’s apex collegiate sports
                      league.
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <div className=" flex flex-col xxl:flex-row   p-12 pl-0 text-black ">
                      <div className="xxl:w-1/2 mb-20 flex justify-center">
                        <img src="/gametime-1.jpg" className="md:w-[70%] lg:w-full" alt="" />
                      </div>
                      <div className="xxl:w-1/2  text-black text-left">
                        Gametime is a TV, E-zine, Radio Magazine programme. It’s the largest youth engagement and
                        connection programme in the country that is driven by HiSL, Nigeria’s apex collegiate sports
                        league Gametime content cuts across Sports, Entertainment, Lifestyle and Career opportunities.
                        <br />
                        <br />
                        GameTime defines pop culture for the ’20s youth. It showcases the best of collegiate sports and
                        football in particular with renowned pundits and figures in the space.
                        <br />
                        <br /> GameTime is available across media on: TV, Radio, E-Zine and Social Media
                      </div>
                    </div>
                    <div className="mt-5 text-black w-[95%] md:w-[75%]  xxl:w-full ">
                      <h2 className="font-bold ">GAMETIME BROADCAST STATIONS</h2>

                      <div className="flex flex-col xxl:flex-row justify-between  gap-8  p-12 pt-5 px-0 text-black ">
                        <table className="flex-[0.5] h-fit ">
                          <thead>
                            <tr className="p-0 text-left">
                              <th className="border border-black border-l-0 border-t-0 p-0 w-1/2 ">RADIO STATIONS</th>
                              <th className="border border-black border-r-0 border-t-0 px-10 xxl:px-6 py-3 w-1/2">
                                DAY & TIME
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {radio.map(({ channel, time }, ind) => (
                              <tr className="p-0" key={ind}>
                                <td className="border border-black border-l-0  p-0  w-1/2">{channel}</td>
                                <td className="border border-black border-r-0 px-10 xxl:px-6  py-3 w-1/2">{time}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>

                        <table className="flex-[0.5] h-fit">
                          <thead>
                            <tr className="text-left">
                              <th className="border border-black border-l-0 border-t-0 p-0 w-1/2 ">TV STATIONS</th>
                              <th className="border border-black border-r-0 border-t-0 px-6 py-3 w-1/2">DAY & TIME</th>
                            </tr>
                          </thead>

                          <tbody>
                            {tv.map(({ channel, time }, ind) => (
                              <tr className="p-0" key={ind}>
                                <td className="border border-black border-l-0">{channel}</td>
                                <td className="border border-black border-r-0 px-6 py-3">{time}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="flex flex-col    p-12 pl-0  text-white xxl:flex-row-reverse  ">
                      <h1 className="  text-4xl mb-12 xxl:hidden text-black text-center">How to get on the show</h1>
                      <div className="xxl:w-1/2 mb-20 xxl:mb-0 ">
                        <img src="/gametime-started.jpg" alt="" />
                      </div>
                      <div className="xxl:self-center xxl:w-1/2 ">
                        <h1 className=" hidden xxl:inline-block text-4xl mb-6 text-black text-center  ">
                          How to get on the show
                        </h1>
                        <a href="/gametime.pdf" download className="flex justify-center xxl:justify-start">
                          <button className="bg-[#000229] text-white p-4 rounded ">DOWNLOAD GAMETIME</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="     "></div>
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

export default GameTime;

//Exclude this page during build
// export const getStaticProps = async () => {
//   if (process.env.NODE_ENV === "production") {
//     return { notFound: true };
//   }
//   return { notFound: true };
// };
