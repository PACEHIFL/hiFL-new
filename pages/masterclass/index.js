import React from "react";
import InnerSection from "../../components/volunteer/InnerSection";
import Link from "next/link";
import InnerSectionMaster from "../../components/volunteer/InnerSectionMaster";
import SideBar from "../../components/shared/SideBar";
import FixturesBrief from "../../components/shared/FixturesBrief";
import LatestNews from "../../components/volunteer/LatestNews";
import Image from "next/dist/client/image";

const Masterclass = () => {
  const content = [
    {
      title: "SPORTS AND MENTAL HEALTH: Effects Of Sports On Mental Health",
      img: "/tunde_akinbinu.png",
      parag:
        "We know that sports are great for your physical health. However, very little is said about the negative effects of Sports on mental health. Dr Tunde Akinbinu, a member of the Nigerian Football Federation (NFF) Sports Medical Committee will elaborate on the positive and negative effects that sports can have on the psychology of athletes and how to handle mental issues associated with sports.",

      name: "Dr Tunde Akinbinu",
      designation: "Health Consultant, HIFL",
      date: "June 13, 2022",
    },
    {
      title: "5-3-2: Financial Formation For Life",
      img: "/obinna.png",
      parag:
        "The best managers approach every obstacle with clear tactics and formation to give them an edge. Every individual should be able to manage their finances in order to thrive in this challenging economic climate. Obinna Lewis-Asonye, Business Development Manager for Micropension at Stanbic IBTC will provide the ultimate but simple plan to help you reach their financial goals at any stage.",
      name: "Obinna Lewis-Asonye",
      designation: "Business Development Manager of micro pension at Stanbic IBTC.",
      date: "June 14, 2022",
    },
    {
      title: "COLLEGIATE SPORTS: Its Role In Promoting National Unity.",
      img: "/amunike.png",
      parag:
        "Nigeria is one nation with great people of different ethnicities, cultures, and religions. The nation has had several issues since its independence and national unity is a very important agenda in the development of the nation. Emmanuel Amunike, a national sports hero and winner of the 2015 FIFA Under-17 World Cup will aim to reorientate the mindset of young Nigerians that the values needed for national unity can be delivered and infused through the extracurricular functions of sports in higher institutions.",
      name: "Emmanuel Amunike",
      designation: "FIFA U-17 World Cup-winning Coach",
      date: "June 15, 2022",
    },

    {
      title: "WOMEN IN SPORTS: A Progressive Future",
      img: "/omidiran.png",
      parag:
        "In most nations including Nigeria, women’s sport is undervalued, underfunded, and invisible to most sports fans. Hon. Ayo Omidiran, the proprietor of a women’s football club and former member of the FIFA Women Committee will share from her experience as a leader in women’s sports; what has changed and what needs to be changed for a progressive future.",
      name: "Hon. Ayo Omidiran",
      designation: "Former member, FIFA Women Committee",
      date: "June 16, 2022",
    },
    {
      title: "HiFL: Made In Football",
      img: "/stanbic_speaker.png",
      parag:
        "HiFL is more than a game. While the league has provided an avenue for talented footballers and coaches in the Nigerian collegiate space to shine, it has also created different platforms to engage the non-athlete population across Nigerian universities to massive success. In this fourth active season, HiFL Masterclass reflects on the experiences and insights of some of the individuals who have attained legendary status through the platform.",
      name: "HiFL Legends",
      designation: "",
      date: "June 17, 2022",
    },
  ];

  return (
    <div className="font-redhat">
      <div className="max-w-[94%] md:max-w-[90%] mx-auto  py-8 lg:pb-3 h-auto   ">
        <div className="flex gap-5 xl:gap-8 justify-between ">
          <div className="w-full lg:w-8/12 xl:w-9/12 ">
            <div className=" pb-0 md:pb-0 lg:pb-0 ">
              <div className="">
                <div>
                  <Image src="/mc.jpg" alt="" width="100%" height="40vh" layout="responsive" objectFit="cover" />
                </div>
                <div className="text-black mt-8  md:w-[90%] lg:w-[85%]">
                  <h1 className=" font-bold lg:text-2xl sm:mb-2 sm:text-xl ">HiFL Masterclass Series</h1>
                  <p>
                    The #HiFLMasterClass Series is a sequence of online sessions created to grow and empower critical
                    HiFL stakeholders – sports and non-sports enthusiasts by engaging experts on pertinent issues that
                    affect them.
                  </p>
                  <br />{" "}
                  <p>
                    The sessions aim to drive value-delivery to every segment of the collegiate value chain including
                    Sponsors/Partners, Sports Administrators/Managers, Athletes, and Fans while creating a viable
                    platform for continued and long-term direct engagement between HiFL and fans.
                  </p>
                </div>
              </div>
            </div>
            <div className="     ">
              <div className="mb-8  lg:mb-8  ">
                {/* <div className="text-black mt-8 leading-8 md:w-[90%] lg:w-[85%]">
                  <p>
                    We believe that this will further extend the reach and scope of the League beyond its current base
                    further entrenching it's position as one of Africa's biggest collegiate football showpiece..
                  </p>
                </div> */}
              </div>

              <div className="flex flex-col gap-6    mb-8     ">
                <div className="    ">
                  <h1 className=" font-bold lg:text-2xl sm:mb-2 md:mb-5 sm:text-xl text-black">All Sessions</h1>
                  {content.map(({ img, parag, name, arrow, title, designation, date }, ind) => {
                    return (
                      <div key={ind}>
                        <InnerSectionMaster
                          title={title}
                          img={img}
                          parag={parag}
                          name={name}
                          designation={designation}
                          date={date}
                          key={ind}
                        />
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

export default Masterclass;
