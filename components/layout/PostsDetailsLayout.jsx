import React, { useEffect } from "react";
import PageTitle from "../shared/PageTitle";
import SideBar from "../shared/SideBar";
import FixturesBrief from "../shared/FixturesBrief";

const PostsDetailsLayout = ({ name, post: { Title, CoverImage, Content } }) => {
  //TESTING
  // const mediaQuery = window.matchMedia("(min-width: 768px)");
  // if (mediaQuery.matches) {
  //   console.log("Media Query Matched!");
  // }
  //TESTING

  return (
    <div className="font-redhat">
      <PageTitle name={name || "add a title"} />
      <div className="bg-white">
        <div className="max-w-[94%] md:max-w-[90%] mx-auto py-10 text-black">
          <div className="flex gap-10 xl:gap-20 justify-between">
            <div className="w-full lg:w-8/12 xl:w-9/12">
              <div className="">
                <h2 className="text-2xl mb-2 font-semibold">{Title}</h2>
                <h3 className="text-accent text-base mb-5">HiFL Games</h3>
                <div className="">
                  <img src={CoverImage.url} alt={Title} className="w-full" />
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: Content }}
                  className="text-[#000229] space-y-3 mt-4 text-justify"></div>
              </div>
            </div>
            <div className="hidden lg:block w-4/12 xl:w-3/12 space-y-8">
              <div>
                <FixturesBrief />
              </div>
              <div>
                <SideBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsDetailsLayout;
