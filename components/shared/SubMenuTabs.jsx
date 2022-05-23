import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const SubMenuTabs = ({ activeTab }) => {
  const router = useRouter();
  const pathname = router.pathname;
  const subPaths = [
    [
      { title: "Teams", path: "/teams" },
      { title: "Fixtures", path: "/fixtures" },
      { title: "Results", path: "/results" },
      { title: "Hall of Fame", path: "/hall-of-fame" },
    ],
    [
      { title: "News", path: "/news" },
      { title: "Blog", path: "/blog" },
      { title: "Press Release", path: "/press-release" },
      { title: "Gallery", path: "/gallery" },
      { title: "Videos", path: "/videos" },
    ],
    [
      { title: "Sponsors", path: "/sponsors" },
      { title: "Partner", path: "/partner" },
    ],
    [
      { title: "Kits", path: "/kits" },
      { title: "Equipment", path: "/equipment" },
      { title: "Wearables", path: "/wearables" },
    ],
    [
      { title: "Volunteers", path: "/volunteers" },
      { title: "Unifest", path: "/unifest" },
      { title: "Masterclass", path: "/masterclass" },
      { title: "GameTime", path: "/gametime" },
    ],
  ];

  return (
    <div className="max-w-5xl mx-auto flex justify-center h-14">
      {activeTab == null ? (
        ""
      ) : (
        <div className="flex gap-5">
          {subPaths[activeTab]?.map(({ title, path }, i) => (
            <Link href={path} key={i}>
              <a
                className={`${
                  pathname == path && "border border-b-primary border-x-0 border-t-0"
                } cursor-pointer text-[#7E7E7E] py-3`}>
                {title}
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubMenuTabs;
