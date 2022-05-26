import React from "react";
import Image from "next/image";
import LatestNews from "../../components/shared/LatestNews";
import Sponsors from "../../components/shared/Sponsors";
import PageTitle from "../../components/shared/PageTitle";

const About = () => {
  return (
    <div className="font-redhat">
      <PageTitle name="About HiFL" />
      <div className="max-w-[95%] md:max-w-[90%] mx-auto min-h-[300px] py-8">
        <div className="">
          <Image src="/about.png" width="100%" height="40vh" layout="responsive" objectFit="cover" />
        </div>
        <div className="text-[#000229] space-y-3 mt-4 text-justify">
          <p>
            HiFL® (an abbreviation for Higher Institutions Football League) is an annual football competition designed
            for higher institutions in Nigeria particularly universities to showcase campus football talents, stimulate
            healthy rivalry and engage them across Nigeria in the unifying spirit of sportsmanship while enlisting the
            most professional practices and management board of renowned competence for coordination.
          </p>
          <p>
            In our first edition in 2018, 16 top Nigerian universities across 16 major cities played host to 30 games
            over a period of 14 weeks including the Final and Third place which was held at the Lagos Agege Stadium and
            UAM Tillers emerged as champions.
          </p>
          <p>
            For the upcoming 2019 season, the competition will be expanded to include 32 University teams playing 66
            games over 21 weeks to determine the winner of the Ultimate Champions Trophy. The season is scheduled for
            April - October 2019 with the Super Four on the 26th of October in Lagos.
          </p>
          <p>
            The bigger, bolder, better 2019 season will feature a brand new system including a group stage of 32 teams,
            divided into eight groups across the two conferences. Seeding will be used in making the draw for this
            stage, and teams will be drawn in groups together with respect to their geographical locations. The winning
            team and the runners-up from each group then progress to the Round of 16.
          </p>
          <p>
            For this stage, the winning team from one group plays against the runners-up from another group, in the same
            geographical distribution - Coastal or Sahel. This condition will remain through the Quarter Final and Semi
            Final until the Super Four where the winners from inter-conferences matches do battle to determine who lifts
            the trophy. The 2019 format will retain the use of the away goals rule to determine the winners in the knock
            out stage.
          </p>
          <p>
            At HiFL®, our goal is to make football, the country's favorite sport REAL to its teeming followers while
            being a stimulus for the development of college sports and consequentially, sports at large in Nigeria. This
            will be achieved by leveraging participating teams' abilities, school's' sense of pride & identity, and a
            common passion for the game. HiFL® is where the ability of youth and a nation's undying love of football
            meet.
          </p>
          <p>
            Our strategic intent is to position Nigeria as a global campus football powerhouse while empowering and
            showcasing local talents.
          </p>
          <p>
            HiFL®, the football franchise of Higher Institutions Sports League (HiSL), an asset created and managed by
            PACE Sports and Entertainment Marketing Limited; in conjunction with the Nigerian University Games
            Association (NUGA). The League is recognized by the National Universities Commission (NUC), Nigeria Football
            Federation (NFF) and the Committee of Vice Chancellors (CVC).
          </p>
        </div>
        <div className="mt-6">
          <LatestNews />
        </div>
        <div className="bg-white">
          <Sponsors />
        </div>
      </div>
    </div>
  );
};

export default About;
