import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="font-redhat">
      <div className="bg-[url('/title-bg.png')] bg-top h-[125px] flex items-center">
        <h2 className="text-white text-5xl px-20 font-bold">Your Account</h2>
      </div>
      <div className="max-w-[95%] md:max-w-[90%] mx-auto min-h-[300px] py-8">{children}</div>
    </div>
  );
};

export default AuthLayout;
