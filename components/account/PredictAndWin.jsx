import React, { useState } from "react";
import AccountLayout from "../layout/AccountLayout";
import Predictions from "./predictandwin/Predictions";
import PredictTabs from "./predictandwin/PredictTabs";

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
  const [activeTab, setActiveTab] = useState(0);

  return (
    <AccountLayout name="predict & win">
      <div className="p-3 md:p-6">
        <div className="md:p-6 bg-whit">
          <div className="bg-white px-4 py-8">
            <div className="border-b border-warning">
              <PredictTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
          </div>
          <div className="pt-6">
            {activeTab === 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                {predictItems.map((matches, i) => (
                  <Predictions predictItems={matches} key={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </AccountLayout>
  );
};

export default PredictAndWin;
