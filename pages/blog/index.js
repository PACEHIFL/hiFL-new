import React from "react";
import PostsLayout from "../../components/layout/PostsLayout";
import axios from "axios";

const Blog = ({ data }) => {
  return <PostsLayout name="blog" posts={data} />;
};

export default Blog;

export async function getStaticProps() {
  try {
    const baseURL = process.env.CMS_URL;
    const { data, errors } = await axios(`${baseURL}/posts?populate=*`);
    const blogsPosts = data.data.filter((post) => post.categories[0].CategoryName.includes("Blog"));
    const latestBlogPosts = blogsPosts?.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    //const blogsPosts = data.data.filter((blog) => blog.categories.map((p) => p.CategoryName.includes("News")));

    if (errors || !data) {
      return { notFound: true };
    }

    return {
      props: {
        data: latestBlogPosts,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}
