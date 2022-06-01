import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { convertToSlug } from "../../helpers/utils";

const PostsItem = ({ post: { img, title, category, excerpt } }) => {
  const router = useRouter();
  const path = router.pathname;
  return (
    <div className="flex flex-col md:flex-row gap-8 border-b border-[#D0D0D0] text-secondary pb-8 font-redhat">
      <div className="w-full md:w-[40%]">
        <Image src={img} alt={title} width="100%" height="60%" layout="responsive" objectFit="cover" />
      </div>
      <div className="w-full md:w-[60%] flex flex-col justify-between">
        <div>
          <h2 className="text-xl md:text-2xl mb-1">{title}</h2>
          <h3 className="text-accent text-sm md:text-base mb-3">{category}</h3>
          <p className="text-sm">{excerpt}</p>
        </div>
        <div>
          <Link href={`${path}/${convertToSlug(title)}`}>
            <a className="btn bg-secondary normal-case text-white text-sm mt-2">Continue reading...</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostsItem;
