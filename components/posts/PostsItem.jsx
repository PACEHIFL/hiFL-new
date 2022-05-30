import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { convertToSlug } from "../../helpers/utils";

const PostsItem = ({ post: { img, title, category, excerpt } }) => {
  const path = useRouter().pathname;
  return (
    <div className="flex gap-8 border-b border-[#D0D0D0] text-secondary pb-8 font-redhat">
      <div className="w-[40%]">
        <Image src={img} alt={title} width="100%" height="60%" layout="responsive" objectFit="cover" />
      </div>
      <div className="w-[60%] flex flex-col justify-between">
        <div>
          <h2 className="text-2xl mb-1">{title}</h2>
          <h3 className="text-accent text-base mb-3">{category}</h3>
          <p className="text-sm">{excerpt}</p>
        </div>
        <div>
          <Link href={`${path}/${convertToSlug(title)}`}>
            <a className="btn bg-secondary normal-case text-white text-sm">Continue reading...</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostsItem;
