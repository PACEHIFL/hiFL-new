import React from "react";

const tabItems = ["Overview", "Squad", "Fixtures", "Results", "Stats", "Store"];

const Tabs = ({tabs, setTabs}) => {
  return (
    <div className="max-w-[94%] md:max-w-[90%] mx-auto text-black mt-4 font-redhat">
      <div className="flex items-center justify-between gap-10 ">
        {tabItems?.map((tab, idx) => (
          <div key={idx} className={`${tabs === idx ? "bg-secondary text-white" : 'bg-white text-secondary'} border border-secondary p-4 w-full text-center font-bold cursor-pointer`} onClick={() => setTabs(idx)}>
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
