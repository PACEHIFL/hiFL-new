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
    const { data, errors } = await axios(
      `${baseURL}/posts?sort=PublishDate:DESC&filters[$and][0][categories][CategoryName][$eq]=Blog&populate=*`
    );

    if (errors || !data) {
      return { notFound: true };
    }

    return {
      props: {
        data: data.data,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}
