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
                  {/* <div className="mb-5">
                    <h1 className=" font-bold lg:text-2xl sm:mb-2 sm:text-xl ">
                      What can become a part of the Volunteer Force
                    </h1>

                    <p>To become a volunteer, you have to be a student of a participating university.</p>
                  </div> */}
                  {/* <div>
                    <h1 className=" font-bold lg:text-2xl sm:mb-2 sm:text-xl ">How to become a Volunteer</h1>
                    <p>
                      You can apply to become a volunteer by going to the HiFL Volunteers Page and clicking on "Sign up"
                      You can find this byclicking on this link Volunteer portal{" "}
                      <Link href="https://www.hiflng.com/volunteer">https://www.hiflng.com/volunteer</Link>
                    </p>
                  </div> */}
                </div>
                <div>
                  <div>
                    <div className='flex  gap-8 bg-[url("/volunteer-bg.png")] bg-cover bg-right bg-no-repeat mix-blend-darken bg-[#000229] p-12 text-white'>
                      <div className="w-1/2 ">
                        <img src="/volunteer-banner.png" alt="" />
                      </div>
                      <div className="w-1/2">
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
                    <div className="mt-5 text-black ">
                      <h2 className="font-bold">GAMETIME BROADCAST STATIONS</h2>

                      <div className="flex flex-row-reverse gap-8  p-12 pt-5 px-0 text-black ">
                        {/* <div className="w-1/2 ">
                        <img src="/volunteer-banner.png" alt="" />
                      </div> */}
                        {/* <div> */}

                        <table className="w-1/2 table-fixed">
                          <thead>
                            <tr className="text-left">
                              <th className="border border-black border-l-0 border-t-0 p-0 w-1/2 h-1">
                                RADIO STATIONS
                              </th>
                              <th className="border border-black border-r-0 border-t-0 px-6 py-2 w-1/2">DAY & TIME</th>
                            </tr>
                          </thead>

                          <tbody>
                            {tv.map(({ channel, time }) => {
                              return (
                                <tr className="p-0 ">
                                  <td className="border border-black border-l-0  p-0 w-1/2">{channel}</td>
                                  <td className="border border-black border-r-0 px-6 py-3 w-1/2">{time}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                        <table className="w-1/2 table-fixed">
                          <thead>
                            <tr className="text-left">
                              <th className="border border-black border-l-0 border-t-0 p-0 w-1/2 h-1">
                                RADIO STATIONS
                              </th>
                              <th className="border border-black border-r-0 border-t-0 px-6 py-2 w-1/2">DAY & TIME</th>
                            </tr>
                          </thead>
                          <tbody>
                            {radio.map(({ channel, time }) => {
                              return (
                                <tr className="p-0 h-4">
                                  <td className="border border-black border-l-0  p-0 w-1/2">{channel}</td>
                                  <td className="border border-black border-r-0 px-6 py-3 w-1/2">{time}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className='flex flex-row-reverse gap-8 bg-[url("/volunteer-bg.png")] bg-cover bg-right bg-no-repeat mix-blend-darken bg-[#000229] p-12 text-white'>
                      <div className="w-1/2 ">
                        <img src="/volunteer-banner.png" alt="" />
                      </div>
                      <div className="w-1/2 flex flex-col align-top  ">
                        <p className="mb-6">To subscribe for the E-zine:</p>
                        <input className="mb-6 p-2 rounded" placeholder="Email Address" />
                        <button className=" bg-white py-2  text-black w-2/5 rounded">Subscribe</button>
                      </div>
                    </div>
                    <div className="flex  gap-8  p-12 px-0 text-black">
                      <div className="w-1/2 ">
                        <img src="/volunteer-banner.png" alt="" />
                      </div>
                      <div className="self-center w-1/2 ">
                        <h1 className="  text-4xl mb-6">How to get on the show</h1>
                        <button className="bg-[#000229] text-white p-4 rounded">DOWNLOAD GAMETIME</button>
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
