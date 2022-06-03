import React from "react";

const SideMenu = ({ activeTab, setActiveTab }) => {
  const menuItems = ["Profile", "Store", "Volunteer Force", "Unifest", "Predict & Win"];
  return (
    <nav className="flex flex-col overflow-hidden">
      {menuItems.map((menu, i) => (
        <p
          className={`${
            i === activeTab ? "bg-[#F0F0F0] font-bold" : "hover:bg-[#F0F0F0]"
          } text-secondary text-[12px] uppercase cursor-pointer px-5 py-4 border-b border-warning`}
          onClick={() => setActiveTab(i)}
          key={i}>
          {menu}
        </p>
      ))}
    </nav>
  );
};

export default SideMenu;
