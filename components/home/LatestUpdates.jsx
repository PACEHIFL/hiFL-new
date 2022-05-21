import React from "react";
import LatestNews from "../shared/LatestNews";
import RectangularBanner from "../shared/RectangularBanner";

const LatestUpdates = () => {
  return (
    <div className="space-y-6">
      <div>
        <LatestNews />
      </div>
      <div className="px-20">
        <RectangularBanner source="/rect-banner.png" link="#" />
      </div>
    </div>
  );
};

export default LatestUpdates;
