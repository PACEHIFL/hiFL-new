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
    const { data, errors } = await axios(
      `${baseURL}/posts?sort=PublishDate:DESC&filters[$and][0][categories][CategoryName][$eq]=Press%20Release&populate=*`
    );

    if (errors || !data) {
      return { notFound: true };
    }

    return {
      props: {
        data: data.data,
      },
      revalidate: 1,
    };
  } catch (error) {
    return { notFound: true };
  }
}
