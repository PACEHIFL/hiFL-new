import React from "react";

const StoreTabs = ({ activeTab, setActiveTab }) => {
  const items = ["orders", "promos", "coupon", "wallet"];
  return (
    <nav className="flex gap-5 overflow-hidden">
      {items.map((item, i) => (
        <p
          className={`${
            i === activeTab ? "bg-warning text-secondary font-bold" : "hover:bg-warning bg-secondary text-white"
          } text-[12px] uppercase cursor-pointer px-5 py-4`}
          onClick={() => setActiveTab(i)}
          key={i}>
          {item}
        </p>
      ))}
    </nav>
  );
};

export default StoreTabs;
