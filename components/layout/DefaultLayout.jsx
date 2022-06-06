import React from "react";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import Sponsors from "../shared/Sponsors";

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Navbar />
        {children}
      </div>
      <div>
        <div className="bg-white">
          <div className="max-w-[94%] md:max-w-[90%] mx-auto">
            <Sponsors />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
