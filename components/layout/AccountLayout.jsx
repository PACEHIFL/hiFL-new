import React from "react";

const AccountLayout = ({ children, name }) => {
  return (
    <div className="">
      <h2 className="px-5 py-3 font-bold text-xl capitalize hidden lg:block">{name}</h2>
      <div className="bg-[#F8F8F8] min-h-[200px] border-t-2 border-warning">{children}</div>
    </div>
  );
};

export default AccountLayout;
