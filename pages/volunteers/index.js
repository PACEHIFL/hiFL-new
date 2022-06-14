import React from "react";
import InnerSection from "../../components/volunteer/InnerSection";
import Link from "next/link";
import InnerSectionList from "../../components/volunteer/InnerSectionMaster.jsx";
import SideBar from "../../components/shared/SideBar";
import FixturesBrief from "../../components/shared/FixturesBrief";
import LatestNews from "../../components/volunteer/LatestNews";
import Image from "next/dist/client/image";

const volunteer = () => {
  const content = [
    {
      title: "Connect",
      img: "/volunteer-application.png",
      item: [
        { list: "With peers and like-minds in your schooland other campuses" },
        { list: "Also with fans,teams,partner brands and sponsors" },
      ],

      lower: "Join now",
      arrow: "/arrow 1.png",
    },
    {
      title: "Grow",
      img: "/fem-volunteers.png",
      item: [
        { list: "Career advancement opportunities including internship and workplace prep" },
        { list: "Access to our extensive resource library for skills such as leadership,team bulding, marketing etc." },
        { list: "Opportunity to add value to your community; Project X" },
      ],
      lower: "",
      arrow: "",
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
    },

    {
      title: "Gain",
      img: "/fem-volunteers.png",
      item: [
        {
          list: "Benefits including certificates, branded souvenirs/mechandise,exclusive promotional giveaways, backstage passes to special events",
        },
      ],
      lower: "",
      arrow: "",
    },
  ];

  return (
    <div className="font-redhat">
      <div className="max-w-[94%] md:max-w-[90%] mx-auto  py-8 lg:pb-3 h-auto   ">
        <div className="flex gap-5 xl:gap-8 justify-between ">
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
                  <div className="mb-5">
                    <h1 className=" font-bold lg:text-2xl sm:mb-2 sm:text-xl ">What the Volunteer Force is about</h1>
                    <p>
                      A movement of young people across Nigerian campuses leveraging the power of football through HiFL
                      to improve their communities whilepromoting associated brands in the process.
                    </p>
                  </div>
                  <div className="mb-5">
                    <h1 className=" font-bold lg:text-2xl sm:mb-2 sm:text-xl ">
                      What can become a part of the Volunteer Force
                    </h1>

                    <p>To become a volunteer, you have to be a student of a participating university.</p>
                  </div>
                  <div>
                    <h1 className=" font-bold lg:text-2xl sm:mb-2 sm:text-xl ">How to become a Volunteer</h1>
                    <p>
                      You can apply to become a volunteer by going to the HiFL Volunteers Page and clicking on "Sign up"
                      You can find this byclicking on this link Volunteer portal{" "}
                      <Link href="https://www.hiflng.com/volunteer">https://www.hiflng.com/volunteer</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="     ">
              <div className="mb-8  lg:mb-8  ">
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
                <div className="text-black mt-8 md:w-[90%] lg:w-[85%]">
                  <h1 className=" font-bold lg:text-2xl sm:mb-2 sm:text-xl ">
                    What are the benefits of being a avolunteer
                  </h1>
                  <ul className="list-disc ml-5">
                    <li>Certificate of recognition</li>
                    <li>Networking opportunities</li>
                    <li>Personal development</li>
                    <li>Branded gift items</li>
                    <li>Experience of a lifetime at the biggest collegiate sports event in the country</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-6    mb-8  mt-5   ">
                <div className="    ">
                  {content.map(({ img, parag, lower, arrow, title, item }, ind) => {
                    return (
                      <div key={ind}>
                        <InnerSection title={title} img={img} item={item} lower={lower} arrow={arrow} key={ind} />
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
