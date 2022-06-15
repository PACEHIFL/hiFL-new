import React from "react";

const tabItems = ["Overview", "Squad", "Fixtures", "Results", "Stats", "Store"];

const Tabs = ({ tabs, setTabs }) => {
  return (
    <div className="max-w-[94%] md:max-w-[90%] mx-auto text-black font-redhat">
      <div className="flex items-center justify-between gap-5 md:gap-10 overflow-scroll lg:overflow-hidden scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-200 h-28">
        {tabItems?.map((tab, idx) => (
          <div
            key={idx}
            className={`${
              tabs === idx ? "bg-secondary text-white" : "bg-white text-secondary"
            } border border-secondary p-4 w-full text-center font-bold cursor-pointer`}
            onClick={() => setTabs(idx)}>
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
