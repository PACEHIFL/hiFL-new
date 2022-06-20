import React from "react";
import PostsDetailsLayout from "../../components/layout/PostsDetailsLayout";
import axios from "axios";
import { useRouter } from "next/router";
import PageLoading from "../../components/shared/PageLoading";

const Post = ({ data }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <PageLoading loading={router.isFallback} />;
  }

  return <PostsDetailsLayout name="video" post={data} />;
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
    const { data } = await axios(`${baseURL}/posts?sort=PublishDate:DESC&filters[$and][0][Type][$eq]=Video&populate=*`);

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
