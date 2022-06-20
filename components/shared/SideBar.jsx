import React from "react";
import FeaturedCoach from "./FeaturedCoach";
import FeaturedPlayer from "./FeaturedPlayer";
import FeaturedSchool from "./FeaturedSchool";
import SquareBanner from "./SquareBanner";
const SideBar = () => {
  return (
    <div className="space-y-8">
      <div>{/* <FeaturedPlayer /> */}</div>
      <div>
        <SquareBanner />
      </div>
      <div>{/* <FeaturedCoach /> */}</div>
      <div>
        <SquareBanner />
      </div>
      <div>{/* <FeaturedSchool /> */}</div>
    </div>
  );
};

export default SideBar;
