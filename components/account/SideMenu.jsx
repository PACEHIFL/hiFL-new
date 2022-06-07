import React from "react";

const SideMenu = ({ activeTab, setActiveTab }) => {
  const menuItems = ["Profile", "Store", "Volunteer Force", "Unifest", "Predict & Win"];
  return (
    <nav className="flex lg:flex-col gap-1 lg:gap-0 overflow-x-auto w-full">
      {menuItems.map((menu, i) => (
        <p
          className={`${
            i === activeTab ? "bg-[#F0F0F0] font-bold" : "hover:bg-[#F0F0F0]"
          } text-secondary text-[12px] uppercase cursor-pointer px-5 py-3 lg:py-4 lg:border-b border-warning`}
          onClick={() => setActiveTab(i)}
          key={i}>
          {menu}
        </p>
      ))}
    </nav>
  );
};

export default SideMenu;
