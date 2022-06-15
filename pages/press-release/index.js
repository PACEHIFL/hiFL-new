import React from "react";
import PostsLayout from "../../components/layout/PostsLayout";
import axios from "axios";

const PressRelease = ({ data }) => {
  return <PostsLayout name="press release" posts={data} />;
};

export default PressRelease;

export async function getStaticProps() {
  try {
    const baseURL = process.env.CMS_URL;
    const { data, errors } = await axios(`${baseURL}/posts?populate=*`);
    const pressPosts = data.data.filter((post) => post.categories[0].CategoryName.includes("Press Release"));
    const latestPressPosts = pressPosts?.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

    if (errors || !data) {
      return { notFound: true };
    }

    return {
      props: {
        data: latestPressPosts,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}
