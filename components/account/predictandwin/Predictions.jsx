import React, { useState } from "react";

const Predictions = (predictItems) => {
  const [data, setData] = useState(predictItems);

  const handleClick = (type, name) => {
    if (type == "increase") {
      setData({ ...data, [name]: data[name] + 1 });
    }
    if (type == "reduce" && data[name] > 0) {
      setData({ ...data, [name]: data[name] - 1 });
    }
  };

  return (
    <div className="">
      <div className="bg-white rounded-md p-4">
        <div className="flex justify-between text-sm">
          <div className="flex gap-2">
            <img src="/hifl-icon.png" alt="HiFL" />
            <h2>{data.stage}</h2>
          </div>
          <div className="flex gap-2">
            <h2>{data.date}</h2>
            <span>|</span>
            <h2>{data.time}</h2>
          </div>
        </div>
        <div className="flex justify-center my-8">
          <div className="flex gap-8 items-center text-sm">
            <div className="flex gap-6 items-center">
              <div className="flex flex-col gap-2 text-center items-center justify-center">
                <img src={data.homeTeamLogo} alt={data.homeTeamName} className="w-[40px]" />
                <h2>{data.homeTeamName}</h2>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <img
                  src="/top-arrow.png"
                  alt=""
                  className="w-[18px] cursor-pointer"
                  onClick={() => handleClick("increase", "homeScore")}
                />
                <span className="p-3 border border-secondary">{data.homeScore}</span>
                <img
                  src="/bottom-arrow.png"
                  alt=""
                  className="w-[18px] cursor-pointer"
                  onClick={() => handleClick("reduce", "homeScore")}
                />
              </div>
            </div>
            <span>V</span>
            <div className="flex gap-6 items-center">
              <div className="flex flex-col gap-2 items-center">
                <img
                  src="/top-arrow.png"
                  alt=""
                  className="w-[18px] cursor-pointer"
                  onClick={() => handleClick("increase", "awayScore")}
                />
                <span className="p-3 border border-secondary">{data.awayScore}</span>
                <img
                  src="/bottom-arrow.png"
                  alt=""
                  className="w-[18px] cursor-pointer"
                  onClick={() => handleClick("reduce", "awayScore")}
                />
              </div>
              <div className="flex flex-col gap-2 text-center items-center justify-center">
                <img src={data.awayTeamLogo} alt={data.awayTeamName} className="w-[40px]" />
                <h2>{data.awayTeamName}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Predictions;
