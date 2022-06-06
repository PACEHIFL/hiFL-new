import React from "react";
import Image from "next/image";
import Link from "next/link";
import useFetch from "../../hooks/useFetch";
import PostsSkelenton from "../posts/PostsSkelenton";

const LatestNews = () => {
  const news = [
    {
      img: "/news.png",
      type: "Latest News",
      title: "HiFL 2021: Unimaid Desert Warriors, AAUA Luminaries qualify for finals",
      desc: "HiFL 2021: Unimaid Desert Warriors, AAUA Luminaries qualify for finals",
      link: "#",
    },
    {
      img: "/news.png",
      type: "News",
      title: "Unimaid beat Futminna 1-0 as UNN walk tight rope",
      desc: "HiFL 2021: Unimaid Desert Warriors, AAUA Luminaries qualify for finals",
      link: "#",
    },
    {
      img: "/news.png",
      type: "Referees",
      title: "Unimaid beat Futminna 1-0 as UNN walk tight rope",
      desc: "HiFL 2021: Unimaid Desert Warriors, AAUA Luminaries qualify for finals",
      link: "#",
    },
  ];
  const baseURL = process.env.CMS_URL;
  const { data, loading } = useFetch(`${baseURL}/posts?populate=*`);

  const newsPosts = data?.data.filter((post) => post.categories[0].CategoryName.includes("News"));
  const latestNews = newsPosts?.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  return (
    <div className="border border-x-0 border-[#D0D0D0] font-redhat text-[#000229] pb-8">
      <div className="flex justify-between items-center py-2">
        <h2 className="text-[#000229] font-bold text-lg font-redhat py-3">Latest News</h2>
        <Link href="/news">
          <a className="flex gap-2 text-sm font-bold">
            <span>View All</span>
            <img src="/right-arrow.png" alt="" />
          </a>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-2 justify-between">
        {loading ? (
          <>
            <PostsSkelenton />
            <PostsSkelenton />
            <PostsSkelenton />
          </>
        ) : (
          latestNews?.slice(0, 3).map(({ id, Title, CoverImage, categories, Excerpt }, i) => (
            <Link href={`news/${id}`} key={i}>
              <a className="w-full">
                <img src={CoverImage.url} alt={Title} className="w-full" />
                <h3 className="text-accent font-bold italic text-xs py-1">{categories[0].CategoryName}</h3>
                <h2 className="text-sm font-semibold">{Title}</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: Excerpt }}
                  className="text-[#000229] text-xs text-justify font-extralight font-redhat pt-1"></div>
              </a>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default LatestNews;
