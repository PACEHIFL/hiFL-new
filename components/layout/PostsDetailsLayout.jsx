import Image from "next/image";
import React from "react";
import PageTitle from "../shared/PageTitle";
import SideBar from "../shared/SideBar";
import FixturesBrief from "../shared/FixturesBrief";

const PostsDetailsLayout = ({ name }) => {
  return (
    <div className="font-redhat">
      <PageTitle name={name || "add a title"} />
      <div className="bg-white">
        <div className="max-w-[94%] md:max-w-[90%] mx-auto py-10 text-black">
          <div className="flex gap-10 xl:gap-20 justify-between">
            <div className="w-full lg:w-8/12 xl:w-9/12">
              <div className="">
                <h2 className="text-2xl mb-2">Stenoväling ossade. Hyrade suprar. Reans biogen. Sov. </h2>
                <h3 className="text-accent text-base mb-5">HiFL Games</h3>
                <div className="">
                  <Image src="/about.png" alt="" width="100%" height="40vh" layout="responsive" objectFit="cover" />
                </div>
                <div className="text-[#000229] space-y-3 mt-4 text-justify">
                  <p>
                    BLOGOCT 5, 2021The final of the 2021 edition of the Higher Institutions Football League, HiFL, has
                    been scheduled to take place on October 9, at the Yabatech Sports Complex, Lagos with the two
                    finalists, UNIMAID Desert Warriors, and AAUA Luminaries, slugging it out for the right to the
                    trophy. UNIMAID Desert Warriors of the University of Maiduguri heads into the finals as the
                    highest-scoring team from the Round of 16 with 11 goals with Adekunle Ajasin University's AAUA
                    Luminaries, the first state-owned university to qualify for the Super Four and to play in the final
                    of HiFL since 2018.. The Luminaries are the lowest scoring side, having scored three goals from the
                    Round of 16. The four teams in the 2021 Super 4 have scored 24 goals among them from the round of 16
                    with Suleiman Saleh of the UNIMAID Desert Warriors topping the scorers log with four goals. Speaking
                    ahead of this weekend finale, the managing director of Beiersdorf in Nigeria, Godwin Harrison,
                    described this year's edition of the collegiate football league as fantastic, saying the dedication
                    and determination of the players to succeed in the round leather game align with the company goal of
                    connecting. “Nivea Men is happy to witness these fantastic displays from our youths riding on the
                    platform of the Higher Institution Football League,” Harrison stated. “The dedication and
                    determination of these players to succeed in their games align with our goal of connecting with
                    Nigerian youths and providing them with platforms to express themselves while they also study. As we
                    look forward to the Super Four games, we congratulate the teams that will play in the finals. ”On
                    his part, the chief strategy officer of PACE Sports and Entertainment Marketing Limited, Goodness
                    Onyejiaku, commended the sponsors for using the HiFL brand to provide opportunities for Nigerian
                    youths. “Our sponsors including StanbicIBTC, Nivea Men, Bold, and Minimie have demonstrated
                    corporate responsibility by their association with the HiFL brand to connect and provide
                    opportunities for Nigerian youths to develop their talents even while they study. It can only get
                    better as we all look forward to an interesting final,” Onyejiaku said.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block w-4/12 xl:w-3/12 space-y-8">
              <div>
                <FixturesBrief />
              </div>
              <div>
                <SideBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsDetailsLayout;
