import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const PostsItem = ({ post: { id, Title, CoverImage, SubTitle, Excerpt } }) => {
  const router = useRouter();
  const path = router.pathname;
  return (
    <div className="flex flex-col md:flex-row gap-8 border-b border-[#D0D0D0] text-secondary pb-8 font-redhat">
      <div className="w-full md:w-[40%]">
        <img src={CoverImage?.url} alt={Title} className="w-full" />
      </div>
      <div className="w-full md:w-[60%] space-y-3">
        <div>
          <h2 className="text-xl 2xl:text-2xl mb-1">{Title}</h2>
          {SubTitle && <h3 className="text-accent text-sm md:text-base mb-3">{SubTitle}</h3>}
          <div
            dangerouslySetInnerHTML={{ __html: Excerpt }}
            className="text-base 2xl:text-xl text-secondary font-redhat max-w-[90%]"></div>
        </div>

        <div>
          <Link href={`${path}/${id}`}>
            <a className="btn bg-secondary normal-case text-white text-sm mt-2">Continue Reading...</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostsItem;
