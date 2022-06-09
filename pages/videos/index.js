import React from "react";
import PostsLayout from "../../components/layout/PostsLayout";
import axios from "axios";

const VideoPosts = ({ data }) => {
  return <PostsLayout name="videos" posts={data} />;
};

export default VideoPosts;

export async function getStaticProps() {
  const baseURL = process.env.CMS_URL;
  const { data } = await axios(`${baseURL}/posts?populate=*`);
  const videoPosts = data.data.filter((post) => post.categories[0].CategoryName.includes("Video"));
  const latestVideoPosts = videoPosts?.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  return {
    props: {
      data: latestVideoPosts,
    },
  };
}
