import React from "react";
import LatestNews from "../shared/LatestNews";
import LatestVideos from "../shared/LatestVideos";
import PhotoGallery from "../shared/PhotoGallery";
import RectangularBanner from "../shared/RectangularBanner";

const LatestUpdates = () => {
  return (
    <div className="space-y-6">
      <div>
        <LatestNews />
      </div>
      <div className="max-w-[85%] mx-auto">
        <RectangularBanner source="/rect-banner.png" link="#" />
      </div>
      <div>
        <LatestVideos />
      </div>
      <div className="max-w-[85%] mx-auto">
        <RectangularBanner source="/rect-banner.png" link="/#" />
      </div>
      <div>
        <PhotoGallery />
      </div>
    </div>
  );
};

export default LatestUpdates;
