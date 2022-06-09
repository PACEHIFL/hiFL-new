import React from "react";
import PostsDetailsLayout from "../../components/layout/PostsDetailsLayout";
import axios from "axios";

const Post = ({ data }) => {
  return <PostsDetailsLayout name="video" post={data} />;
};

export default Post;

export const getStaticProps = async ({ params: { id } }) => {
  const baseURL = process.env.CMS_URL;
  const { data } = await axios(`${baseURL}/posts/${id}?populate=*`);

  return {
    props: {
      data: data.data,
    },
  };
};

export const getStaticPaths = async () => {
  const baseURL = process.env.CMS_URL;
  const { data } = await axios(`${baseURL}/posts?populate=*`);

  const ids = data.data.map((post) => post.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
