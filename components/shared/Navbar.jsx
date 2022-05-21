import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SubMenuTabs from "./SubMenuTabs";

const Navbar = () => {
  const [showTab, setShowTabs] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const navLinks = [
    {
      name: "The League",
      links: [
        { title: "Teams", path: "/teams" },
        { title: "Fixtures", path: "/fixtures" },
        { title: "Results", path: "/results" },
        { title: "Hall of Fame", path: "/hall-of-fame" },
      ],
    },
    {
      name: "News & Media",
      links: [
        { title: "News", path: "/news" },
        { title: "Blog", path: "/blog" },
        { title: "Press Release", path: "/press-release" },
        { title: "Gallery", path: "/gallery" },
        { title: "Videos", path: "/videos" },
      ],
    },
    {
      name: "Partners",
      links: [
        { title: "Sponsors", path: "/sponsors" },
        { title: "Partner", path: "/partner" },
      ],
    },
    {
      name: "Store",
      links: [
        { title: "Kits", path: "/kits" },
        { title: "Equipment", path: "/equipment" },
        { title: "Wearables", path: "/wearables" },
      ],
    },
    {
      name: "More",
      links: [
        { title: "Volunteers", path: "/volunteers" },
        { title: "Unifest", path: "/unifest" },
        { title: "Masterclass", path: "/masterclass" },
        { title: "GameTime", path: "/gametime" },
      ],
    },
  ];
  return (
    <>
      <div className="bg-secondary text-white font-redhat">
        <div className="flex justify-between items-center md:max-w-3xl lg:max-w-4xl xl:max-w-7xl mx-auto">
          <Link href="/">
            <a onClick={() => setActiveTab(null)}>
              <div className="bg-white px-4 pt-8 rounded-tr-[65px] rounded-br-[5px]">
                <Image src="/hifl-logo.png" alt="HiFL Logo" width={75} height={39} />
              </div>
            </a>
          </Link>
          <nav className="flex gap-5 items-center">
            {navLinks.map(({ name, links }, i) => (
              <p className="flex gap-2 items-center cursor-pointer" onClick={() => setActiveTab(i)}>
                <span>{name}</span>
                <Image src="/arrow-down.png" alt="" width={7} height={5} />
              </p>
            ))}
          </nav>
          <Link href="/signup">
            <a className="">Signin/Signup</a>
          </Link>
        </div>
      </div>
      <SubMenuTabs navLinks={navLinks} activeTab={activeTab} />
    </>
  );
};

export default Navbar;
