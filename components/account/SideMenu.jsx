import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const SideMenu = ({ activeTab, setActiveTab }) => {
  const router = useRouter();
  const path = router.query.tab;
  const menuItems = [
    { name: "Profile", link: null },
    { name: "Store", link: "store" },
    { name: "Volunteer Force", link: "volunteer-force" },
    { name: "Unifest", link: "unifest" },
    { name: "Predict & Win", link: "predict&win" },
  ];

  return (
    <nav className="flex lg:flex-col gap-1 lg:gap-0 overflow-x-auto w-full">
      {menuItems.map(({ name, link }, i) => (
        <Link href={{ pathname: "/account", query: name !== "Profile" && { tab: link } }} key={i}>
          <a
            className={`${
              path == link ? "bg-[#F0F0F0] font-bold" : "hover:bg-[#F0F0F0]"
            } text-secondary text-[12px] uppercase cursor-pointer px-5 py-3 lg:py-4 lg:border-b border-warning`}>
            {name}
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default SideMenu;
