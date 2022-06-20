import React from "react";

const Sponsors = () => {
  return <div>index</div>;
};

export default Sponsors;

//Exclude this page during build
export const getStaticProps = async () => {
  if (process.env.NODE_ENV === "production") {
    return { notFound: true };
  }
  return { notFound: true };
};
