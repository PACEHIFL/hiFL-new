import React, { useState } from "react";
import PostsItem from "../posts/PostsItem";
import FixturesBrief from "../shared/FixturesBrief";
import PageTitle from "../shared/PageTitle";
import SideBar from "../shared/SideBar";

const PostsLayout = ({ name, posts }) => {
  const [postNumber, setPostNumber] = useState(10);

  console.log(posts, "posts");

  const handleShowMore = () => {
    setPostNumber(postNumber + 10);
  };

  return (
    <div className="font-redhat">
      <PageTitle name={name || "add a title"} />
      <div className="bg-white">
        <div className="max-w-[94%] md:max-w-[90%] mx-auto py-10 text-black">
          <div className="flex gap-7 xl:gap-20 justify-between">
            <div className="w-full lg:w-8/12 xl:w-9/12">
              <div className="flex flex-col gap-8">
                {posts?.slice(0, postNumber).map((post, i) => (
                  <PostsItem post={post} key={i} />
                ))}
                <div className="flex justify-center items-center">
                  {posts.length > 10 && postNumber < posts.length && (
                    <button
                      className="btn btn-primary btn-wide normal-case text-white text-sm mt-6"
                      onClick={handleShowMore}>
                      Load More
                    </button>
                  )}
                </div>
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

export default PostsLayout;
