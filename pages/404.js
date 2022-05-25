import React from "react";
import Link from "next/link";

const Error = () => {
  return (
    <div className="max-h-screen-lg mx-auto flex items-center justify-center h-[70vh] text-center font-redhat">
      <div className="">
        <h1 className="font-bold text-8xl text-[#000229]">404</h1>
        <h2 className="font-bold text-6xl text-[#000229]">OOPS! Page Not Found</h2>
        <Link href="/">
          <a className="btn btn-primary btn-wide btn-lg mt-6 border-none"> Back Home</a>
        </Link>
      </div>
    </div>
  );
};

export default Error;
