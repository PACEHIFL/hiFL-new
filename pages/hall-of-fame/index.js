import React from "react";
import Awaredees from "../../components/hall-of-fame/Awaredees";
import PageTitle from "../../components/shared/PageTitle";
import SideBar from "../../components/shared/SideBar";

const Fixtures = () => {

  const hallOfFame = [
    {
      name: "Joshua Alexander",
      award: "Elite Player of the Year",
      year: 2022,
      team: "Brooks and Blake FC"
    },
    {
      name: "Fejiro Ogunje",
      award: "Best Playmaker of the Year",
      year: 2022,
      team: "Brooks and Blake FC"
    },
    {
      name: "Victor Olaitan",
      award: "Best Captain of the Year",
      year: 2022,
      team: "Brooks and Blake FC"
    },
    {
      name: "Ogenero S.",
      award: "Fine Girl of the Year",
      year: 2022,
      team: "Brooks and Blake FC"
    },
    {
      name: "Khadijat Onanuga",
      award: "Programmer of the Year",
      year: 2022,
      team: "Brooks and Blake FC"
    },
    {
      name: "Johnson Tosin",
      award: "UI Designer of the Year",
      year: 2022,
      team: "Brooks and Blake FC"
    },
  ]


  return (
    <div>
      <PageTitle name="Elite Awardees" />
      <div className="bg-white font-red-hat">
        <div className="max-w-[94%] md:max-w-[90%] mx-auto py-10 text-black">
          <div className="flex gap-7 xl:gap-20 justify-between">
            <div className="w-full lg:w-8/12 xl:w-9/12">
              {hallOfFame && hallOfFame?.map((hallOfFame, idx) => (
               <Awaredees key={idx} data={hallOfFame} />
              ))}
            </div>
            <div className="hidden lg:block w-4/12 xl:w-3/12 space-y-8">
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

export default Fixtures;
