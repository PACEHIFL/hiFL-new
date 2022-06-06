import React from "react";
import PostsLayout from "../../components/layout/PostsLayout";
import axios from "axios";

const GalleryPosts = ({ data }) => {
  return <PostsLayout name="gallery" posts={data} />;
};

export default GalleryPosts;

export async function getStaticProps() {
  const baseURL = process.env.CMS_URL;
  const { data } = await axios(`${baseURL}/posts?populate=*`);
  const galleryPosts = data.data.filter((post) => post.categories[0].CategoryName.includes("Gallery"));
  const latestGalleryPosts = galleryPosts?.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  return {
    props: {
      data: latestGalleryPosts,
    },
  };
}

// import React, { useState, useCallback } from "react";
// import Gallery from "react-photo-gallery";
// import Carousel, { Modal, ModalGateway } from "react-images";

// const photos = [
//   {
//     src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
//     width: 4,
//     height: 3,
//   },
//   {
//     src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
//     width: 1,
//     height: 1,
//   },
//   {
//     src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
//     width: 3,
//     height: 4,
//   },
//   {
//     src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
//     width: 3,
//     height: 4,
//   },
//   {
//     src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
//     width: 3,
//     height: 4,
//   },
//   {
//     src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
//     width: 4,
//     height: 3,
//   },
//   {
//     src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
//     width: 3,
//     height: 4,
//   },
//   {
//     src: "https://source.unsplash.com/PpOHJezOalU/800x599",
//     width: 4,
//     height: 3,
//   },
//   {
//     src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
//     width: 4,
//     height: 3,
//   },
// ];

// const GalleryPhotos = () => {
//   const [currentImage, setCurrentImage] = useState(0);
//   const [viewerIsOpen, setViewerIsOpen] = useState(false);

//   const openLightbox = useCallback((event, { photo, index }) => {
//     setCurrentImage(index);
//     setViewerIsOpen(true);
//   }, []);

//   const closeLightbox = () => {
//     setCurrentImage(0);
//     setViewerIsOpen(false);
//   };

//   return (
//     <div>
//       <Gallery photos={photos} onClick={openLightbox} />
//       <ModalGateway>
//         {viewerIsOpen ? (
//           <Modal onClose={closeLightbox}>
//             <Carousel
//               currentIndex={currentImage}
//               views={photos.map((x) => ({
//                 ...x,
//                 srcset: x.srcSet,
//                 caption: x.title,
//               }))}
//             />
//           </Modal>
//         ) : null}
//       </ModalGateway>
//     </div>
//   );
// };

// export default GalleryPhotos;
