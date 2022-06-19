import React from "react";
import Link from "next/link";
import useFetch from "../../../hooks/useFetch";
import PostsSkelenton from "../../posts/PostsSkelenton";

const VolunteerResources = () => {
  const baseURL = process.env.CMS_URL;
  const { data, loading } = useFetch(
    `${baseURL}/posts?sort=PublishDate:DESC&filters[$and][0][categories][CategoryName][$eq]=Blog&populate=*`
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-5">
      {loading ? (
        <>
          <PostsSkelenton />
          <PostsSkelenton />
          <PostsSkelenton />
          <PostsSkelenton />
          <PostsSkelenton />
          <PostsSkelenton />
        </>
      ) : (
        data?.data.slice(0, 6).map(({ id, Title, CoverImage, SubTitle, Excerpt }, i) => (
          <div key={i}>
            <img src={CoverImage?.url} alt={Title} className="w-full" />
            {SubTitle && <h3 className="text-accent italic text-sm pt-1">{SubTitle}</h3>}
            <h2 className="py-2">{Title}</h2>
            <Link href={`/blog/${id}`}>
              <a>
                <button className="btn btn-secondary text-white capitalize">Continue reading</button>
              </a>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default VolunteerResources;
