import React from "react";

const GameTime = () => {
  return <div>index</div>;
};

export default GameTime;

//Exclude this page during build
export const getStaticProps = async () => {
  if (process.env.NODE_ENV === "production") {
    return { notFound: true };
  }
  return { notFound: true };
};
