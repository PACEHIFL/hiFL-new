import React, { useState } from "react";
import AccountLayout from "../layout/AccountLayout";

const predictItems = [
  {
    stage: "Round of 16",
    date: "Friday 4 July 2022",
    time: "04:00",
    homeTeamLogo: "/futa-logo.png",
    homeTeamName: "FUTA Tigers",
    homeScore: 0,
    awayTeamLogo: "/unn.png",
    awayTeamName: "UNN Lions",
    awayScore: 0,
  },
  {
    stage: "Round of 16",
    date: "Friday 4 July 2022",
    time: "04:00",
    homeTeamLogo: "/futa-logo.png",
    homeTeamName: "FUTA Tigers",
    homeScore: 0,
    awayTeamLogo: "/unn.png",
    awayTeamName: "UNN Lions",
    awayScore: 0,
  },
  {
    stage: "Round of 16",
    date: "Friday 4 July 2022",
    time: "04:00",
    homeTeamLogo: "/futa-logo.png",
    homeTeamName: "FUTA Tigers",
    homeScore: 0,
    awayTeamLogo: "/unn.png",
    awayTeamName: "UNN Lions",
    awayScore: 0,
  },
  {
    stage: "Round of 16",
    date: "Friday 4 July 2022",
    time: "04:00",
    homeTeamLogo: "/futa-logo.png",
    homeTeamName: "FUTA Tigers",
    homeScore: 0,
    awayTeamLogo: "/unn.png",
    awayTeamName: "UNN Lions",
    awayScore: 0,
  },
];

const PredictAndWin = () => {
  const [data, setData] = useState(predictItems);

  const handleClick = (type, name) => {
    if (type == "increase") {
      setData({ ...data, [name]: data[name] + 1 });
    }
    if (type == "decrease") {
    }
  };
  return (
    <AccountLayout name="predict & win">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {data?.map(
          ({ stage, date, time, homeTeamLogo, homeTeamName, homeScore, awayTeamLogo, awayTeamName, awayScore }, i) => (
            <div className="bg-white rounded-md p-4">
              <div className="flex justify-between text-sm">
                <div className="flex gap-2">
                  <img src="/hifl-icon.png" alt="HiFL" />
                  <h2>{stage}</h2>
                </div>
                <div className="flex gap-2">
                  <h2>{date}</h2>
                  <span>|</span>
                  <h2>{time}</h2>
                </div>
              </div>
              <div className="flex justify-center my-8">
                <div className="flex gap-8 items-center text-sm">
                  <div className="flex gap-6 items-center">
                    <div className="flex flex-col gap-2 text-center items-center justify-center">
                      <img src={homeTeamLogo} alt={homeTeamName} className="w-[40px]" />
                      <h2>{homeTeamName}</h2>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                      <img src="/top-arrow.png" alt="" className="w-[18px] cursor-pointer" onClick={handleClick} />
                      <span className="p-3 border border-secondary">{homeScore}</span>
                      <img src="/bottom-arrow.png" alt="" className="w-[18px] cursor-pointer" onClick={handleClick} />
                    </div>
                  </div>
                  <span>V</span>
                  <div className="flex gap-6 items-center">
                    <div className="flex flex-col gap-2 items-center">
                      <img
                        src="/top-arrow.png"
                        alt=""
                        className="w-[18px] cursor-pointer"
                        onClick={() => handleClick("increase", awayScore)}
                      />
                      <span className="p-3 border border-secondary">{awayScore}</span>
                      <img
                        src="/bottom-arrow.png"
                        alt=""
                        className="w-[18px] cursor-pointer"
                        onClick={() => handleClick("decrease")}
                      />
                    </div>
                    <div className="flex flex-col gap-2 text-center items-center justify-center">
                      <img src={awayTeamLogo} alt={awayTeamName} className="w-[40px]" />
                      <h2>{awayTeamName}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </AccountLayout>
  );
};

export default PredictAndWin;
