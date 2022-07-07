import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import SubMenuTabs from "./SubMenuTabs";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn, logout } from "../../redux/features/auth.slice";
import { toast } from "react-toastify";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [loggedIn, setLoggedIn] = useState(null);

  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  // const navButtons = ["The League", "News & Media", "Partners", "Store", "More"];
  const navButtons = ["The League", "News & Media", "Store", "More"];

  const handleLogout = () => {
    dispatch(logout());
    router.reload();
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setLoggedIn(true);
    }
  }, [user]);
  return (
    <>
      <div className="bg-secondary text-white font-redhat mb-14 lg:mb-0">
        <div className="container flex justify-between items-center max-w-[94%] md:max-w-[90%] mx-auto">
          <Link href="/">
            <a>
              {/* <div className="bg-white px-4 pt-8 rounded-tr-[65px rounded-br-[10px] rounded-bl-[10px]"> */}
                <img src="/hifl-logo.png" alt="HiFL Logo" className="mb-3 w-20 rounded-tr-[65px rounded-br-[10px] rounded-bl-[10px]" />
              {/* </div> */}
            </a>
          </Link>
          <nav className="gap-5 items-center hidden lg:flex">
            {navButtons.map((name, i) => (
              <p className="flex gap-2 items-center cursor-pointer" onClick={() => setActiveTab(i)} key={i}>
                <span>{name}</span>
                <Image src="/arrow-down.png" alt="" width={7} height={5} />
              </p>
            ))}
          </nav>

          <div className="hidden lg:block">
            {loggedIn ? (
              <div className="flex gap-3">
                <Link href="/account">
                  <a>My Account</a>
                </Link>
                <span>|</span>
                <button onClick={handleLogout}>Sign Out</button>
              </div>
            ) : (
              <Link href="/signin">
                <a>Sign In/Sign Up</a>
              </Link>
            )}
          </div>

          {/* Mobile Menu*/}
          <div className=" lg:hidden">
            <svg
              className="fill-current cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 512 512"
              onClick={() => setMenuOpen(true)}>
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </div>
          {menuOpen && (
            <div
              className="fixed left-0 right-0 bottom-0 h-screen w-full lg:hidden bg-[#0000003d] cursor-pointer z-[99999]"
              onClick={() => setMenuOpen(false)}>
              <div
                className="fixed top-0 left-0 w-[250px] bg-secondary h-screen overflow-y-auto"
                onClick={(e) => e.stopPropagation()}>
                <MobileNavbar setMenuOpen={setMenuOpen} loggedIn={loggedIn} handleLogout={handleLogout} />
              </div>
            </div>
          )}
          {/* Mobile Menu*/}
        </div>
      </div>
      <div className="hidden lg:block">
        <SubMenuTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </>
  );
};

export default Navbar;
