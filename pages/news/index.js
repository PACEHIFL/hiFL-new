import React from "react";
import PostsLayout from "../../components/layout/PostsLayout";
import axios from "axios";

const News = ({ data }) => {
  return <PostsLayout name="news" posts={data} />;
};

export default News;

export async function getStaticProps() {
  try {
    const baseURL = process.env.CMS_URL;
    const { data, errors } = await axios(`${baseURL}/posts?populate=*`);
    const newsPosts = data.data.filter((post) => post.categories[0].CategoryName.includes("News"));
    const latestNewsPosts = newsPosts?.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

    if (errors || !data) {
      return { notFound: true };
    }

    return {
      props: {
        data: latestNewsPosts,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}
