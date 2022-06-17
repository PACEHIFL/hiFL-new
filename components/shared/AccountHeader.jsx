import React, { useState, useEffect } from "react";
import { isLoggedIn } from "../../redux/features/auth.slice";
import { useSelector } from "react-redux";

const AccountHeader = ({ name }) => {
  const [userData, setUserData] = useState(null);
  const { user } = useSelector((state) => state.auth);

  const firstInitial = userData?.Firstname.slice(0, 1);
  const lastInitial = userData?.Lastname?.slice(0, 1);
  const initials = firstInitial + lastInitial;

  useEffect(() => {
    if (isLoggedIn()) {
      setUserData(isLoggedIn().data.User);
    }
  }, [user]);

  return (
    <div className="bg-[url('/title-bg.png')] bg-top h-[180px] flex items-center font-redhat">
      <div className="max-w-[95%] md:max-w-[90%] mx-auto w-full flex justify-between items-center">
        <div>
          <h2 className="text-white text-xl md:text-2xl font-bold capitalize">Hello {userData?.Firstname},</h2>
          <p>What would you like to do today</p>
        </div>
        {userData?.Profile ? (
          <div className="hidden md:block">
            <img src="/avatar.png" alt="" className="w-[100px] h-[100px]" />
          </div>
        ) : (
          user && (
            <div className="bg-[#B3B3B3] flex justify-center items-center capitalize w-[100px] h-[100px] text-4xl text-secondary rounded-full">
              {initials.toString()}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AccountHeader;
