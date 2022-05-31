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
        <div className="container flex justify-between items-center max-w-[94%] md:max-w-[90%] mx-auto">
          <Link href="/">
            <a onClick={() => setActiveTab(null)}>
              <div className="bg-white px-4 pt-8 rounded-tr-[65px] rounded-br-[5px]">
                <Image src="/hifl-logo.png" alt="HiFL Logo" width={75} height={39} />
              </div>
            </a>
          </Link>
          <nav className="gap-5 items-center hidden lg:flex">
            {navLinks.map(({ name, links }, i) => (
              <p className="flex gap-2 items-center cursor-pointer" onClick={() => setActiveTab(i)} key={i}>
                <span>{name}</span>
                <Image src="/arrow-down.png" alt="" width={7} height={5} />
              </p>
            ))}
          </nav>
          <Link href="/signup">
            <a className="hidden lg:block">Sign In/Sign Up</a>
          </Link>

          {/* Mobile Menu button */}
          <div className=" lg:hidden">
            <Image src="/hamburger.png" alt="" width={24.5} height={16.5} className="cursor-pointer" />
          </div>
          {/* Mobile Menu Button */}
        </div>
      </div>
      <div className="hidden lg:block">
        <SubMenuTabs navLinks={navLinks} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </>
  );
};

export default Navbar;
