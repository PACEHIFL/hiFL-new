import React, { useEffect } from "react";
import PageTitle from "../shared/PageTitle";
import { isLoggedIn } from "../../redux/features/auth.slice";
import { useRouter } from "next/router";

const AuthLayout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn()) {
      router.push("/account");
      return;
    }
  }, []);

  return (
    <div className="font-redhat">
      <PageTitle name="Your Account" />
      <div className="max-w-[95%] md:max-w-[90%] mx-auto min-h-[300px] py-8">{children}</div>
    </div>
  );
};

export default AuthLayout;
