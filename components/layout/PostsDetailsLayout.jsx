import React, { useCallback, useEffect, useState } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import PageTitle from "../shared/PageTitle";
import SideBar from "../shared/SideBar";
import FixturesBrief from "../shared/FixturesBrief";
import LatestNews from "../shared/LatestNews";
import ReactPlayer from "react-player";

const PostsDetailsLayout = ({ name, post: { Title, CoverImage, SubTitle, Content, Type, Media } }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);

  //convert media array to a format required by react-photo-gallery
  const getPhotos = () => {
    const photos = [];
    for (let [i, photo] of Media.entries()) {
      photos.push({
        src: photo.url,
        width: 4,
        height: 3,
      });
    }
    return photos;
  };
  //open image lightboox
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);
  //close image lightboox
  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <div className="font-redhat">
      <PageTitle name={name || "add a title"} />
      <div className="bg-white">
        <div className="max-w-[94%] md:max-w-[90%] mx-auto py-10 text-black">
          <div className="flex gap-10 xl:gap-20 justify-between">
            <div className="w-full lg:w-8/12 xl:w-9/12">
              <div className="">
                <h2 className="text-xl lg:text-2xl xl:text-3xl mb-2 font-semibold">{Title}</h2>
                {SubTitle && <h3 className="text-accent text-base ">{SubTitle}</h3>}
                <div className="mt-8 space-y-8">
                  <img src={CoverImage?.url} alt={Title} className="w-full mt-5" />

                  <div
                    dangerouslySetInnerHTML={{ __html: Content }}
                    className="text-[#000229] space-y-3 text-justify font-redhat w-[90%] lg:leading-8 text-base lg:text-[18px] mx-auto"
                  />
                  {/* video post */}
                  {Type == "Video" && pageLoaded && Media && (
                    <ReactPlayer
                      url={Media?.[0].url}
                      controls={true}
                      // light={CoverImage.url}
                      width="100%"
                      // playIcon={<img src="/play.png" alt="" width="10%" />}
                    />
                  )}

                  {/* gallery post */}
                  {Type == "Gallery" && pageLoaded && Media && (
                    <>
                      <Gallery photos={getPhotos()} onClick={openLightbox} />
                      <ModalGateway>
                        {viewerIsOpen ? (
                          <Modal onClose={closeLightbox}>
                            <Carousel
                              currentIndex={currentImage}
                              views={getPhotos()?.map((x) => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title,
                              }))}
                            />
                          </Modal>
                        ) : null}
                      </ModalGateway>
                    </>
                  )}
                </div>
              </div>
              <div className="mt-10">
                <LatestNews />
              </div>
            </div>
            <div className="hidden lg:block w-4/12 xl:w-3/12 space-y-8">
              <div>
                <FixturesBrief />
              </div>
              <div>
                <SideBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsDetailsLayout;
