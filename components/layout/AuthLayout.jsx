import React from "react";
import PageTitle from "../shared/PageTitle";

const AuthLayout = ({ children }) => {
  return (
    <div className="font-redhat">
      <PageTitle name="Your Account" />
      <div className="max-w-[95%] md:max-w-[90%] mx-auto min-h-[300px] py-8">{children}</div>
    </div>
  );
};

export default AuthLayout;
