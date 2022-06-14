import React from "react";
import PostsDetailsLayout from "../../components/layout/PostsDetailsLayout";
import axios from "axios";

const Post = ({ data }) => {
  return <PostsDetailsLayout name="news" post={data} />;
};

export default Post;

export const getStaticProps = async ({ params: { id } }) => {
  try {
    const baseURL = process.env.CMS_URL;
    const { data, errors } = await axios(`${baseURL}/posts/${id}?populate=*`);

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
};

export const getStaticPaths = async () => {
  try {
    const baseURL = process.env.CMS_URL;
    const { data } = await axios(`${baseURL}/posts?populate=*`);

    const ids = data.data.map((post) => post.id);
    const paths = ids.map((id) => ({ params: { id: id.toString() } }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    return { paths: [], fallback: false };
  }
};
