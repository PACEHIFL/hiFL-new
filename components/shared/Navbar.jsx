import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import SubMenuTabs from "./SubMenuTabs";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn, logout } from "../../redux/features/auth.slice";
import { toast } from "react-toastify";

const Navbar = () => {
  const [showTab, setShowTabs] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [loggedIn, setLoggedIn] = useState(null);

  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const navButtons = ["The League", "News & Media", "Partners", "Store", "More"];

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged Out Successfully");
    setInterval(() => {
      router.reload();
    }, 1000);
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setLoggedIn(true);
    }
  }, [user]);
  return (
    <>
      <div className="bg-secondary text-white font-redhat">
        <div className="container flex justify-between items-center max-w-[94%] md:max-w-[90%] mx-auto">
          <Link href="/">
            <a>
              <div className="bg-white px-4 pt-8 rounded-tr-[65px rounded-br-[10px] rounded-bl-[10px]">
                <Image src="/hifl-logo.png" alt="HiFL Logo" width={75} height={39} />
              </div>
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
              <div className="flex gap-2">
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

          {/* Mobile Menu button */}
          <div className=" lg:hidden">
            <Image src="/hamburger.png" alt="" width={24.5} height={16.5} className="cursor-pointer" />
          </div>
          {/* Mobile Menu Button */}
        </div>
      </div>
      <div className="hidden lg:block">
        <SubMenuTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </>
  );
};

export default Navbar;
