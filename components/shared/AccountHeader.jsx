import React, { useState, useEffect } from "react";
import Image from "next/image";
import { isLoggedIn } from "../../redux/features/auth.slice";
// import { useSelector } from "react-redux";

const AccountHeader = ({ name }) => {
  const [userData, setUserData] = useState(null);
  // const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLoggedIn()) {
      setUserData(isLoggedIn().data.User);
    }
  }, []);

  return (
    <div className="bg-[url('/title-bg.png')] bg-top h-[180px] flex items-center">
      <div className="max-w-[95%] md:max-w-[90%] mx-auto w-full flex justify-between items-center">
        <div>
          <h2 className="text-white text-xl md:text-2xl font-bold capitalize">Hello {userData?.Firstname},</h2>
          <p>What would you like to do today</p>
        </div>
        <div className="hidden md:block">
          <img src="/avatar.png" alt="" className="w-[100px] h-[100px]" />
        </div>
      </div>
    </div>
  );
};

export default AccountHeader;
