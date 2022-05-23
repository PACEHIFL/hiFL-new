import React from "react";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
