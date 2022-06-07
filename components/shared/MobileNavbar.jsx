import React from "react";
import Link from "next/link";
import { navLinks } from "../../helpers/data";

const MobileNavbar = ({ setMenuOpen, loggedIn, handleLogout }) => {
  return (
    <nav className="flex flex-col gap-4 py-8 px-4 font-redhat">
      <div className="px-2 flex justify-between mt-2 mb-4">
        <Link href="/">
          <a>
            <img src="/hifl-footer.png" alt="logo" className="w-[75px]" onClick={() => setMenuOpen(false)} />
          </a>
        </Link>
        <img
          src="/close-white.svg"
          alt="vasiti logo"
          className="lg:hidden cursor-pointer"
          onClick={() => setMenuOpen(false)}
        />
      </div>

      <div className="space-y-2 border-y border-[#d0d0d07e] py-4">
        <Link href="/">
          <a className="px-4 py-2 rounded-md flex hover:bg-[#2b2f71]" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </Link>
        {/* Accordion */}
        {navLinks.map(({ name, links }, i) => (
          <details key={i}>
            <summary className="px-4 py-2 rounded-md list-none flex justify-between items-center hover:bg-[#2b2f71]">
              <h2>{name}</h2>
              <div>
                <img src="/arrow-down.png" alt="" />
              </div>
            </summary>
            <div className="flex flex-col gap-1 text-sm">
              {links.map(({ title, path }) => (
                <Link href={path} key={path}>
                  <a
                    className="py-2 pl-6 rounded-md text-[#d9d9d9] hover:bg-[#2b2f71]"
                    onClick={() => setMenuOpen(false)}>
                    {title}
                  </a>
                </Link>
              ))}
            </div>
          </details>
        ))}
      </div>

      <div className="">
        {loggedIn ? (
          <div className="flex flex-col gap-2" onClick={() => setMenuOpen(false)}>
            <Link href="/account">
              <a className="px-4 py-2 rounded-md  hover:bg-[#2b2f71] ">My Account</a>
            </Link>

            <h3 className="px-4 py-2 rounded-md  hover:bg-[#2b2f71]" onClick={handleLogout}>
              Sign Out
            </h3>
          </div>
        ) : (
          <Link href="/signin">
            <a className="px-4 py-2 rounded-md  hover:bg-[#2b2f71] flex" onClick={() => setMenuOpen(false)}>
              Sign In/Sign Up
            </a>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default MobileNavbar;
