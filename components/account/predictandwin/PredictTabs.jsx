import React from "react";

const PredictTabs = ({ activeTab, setActiveTab }) => {
  const items = ["predict", "result", "rank"];
  return (
    <nav className="flex gap-2 md:gap-5 overflow-x-auto">
      {items.map((item, i) => (
        <p
          className={`${
            i === activeTab ? "bg-warning text-secondary font-bold" : "hover:bg-warning bg-secondary text-white"
          } text-[12px] uppercase cursor-pointer px-3 md:px-5 py-2 md:py-4`}
          onClick={() => setActiveTab(i)}
          key={i}>
          {item}
        </p>
      ))}
    </nav>
  );
};

export default PredictTabs;
