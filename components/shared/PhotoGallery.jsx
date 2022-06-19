import React from "react";
import Link from "next/link";
import useFetch from "../../hooks/useFetch";

const PhotoGallery = () => {
  const baseURL = process.env.CMS_URL;
  const { data, loading } = useFetch(
    `${baseURL}/posts?sort=PublishDate:DESC&filters[$and][0][Type][$eq]=Gallery&populate=*`
  );

  return (
    <div className="border-t border-[#D0D0D0] font-redhat text-[#000229] pb-8">
      <div className="flex justify-between items-center py-2">
        <h2 className="text-[#000229] font-bold text-lg font-redhat py-3">Photo Gallery</h2>
        <Link href="/gallery">
          <a className="flex gap-2 text-sm font-bold">
            <span>More Photos</span>
            <img src="/right-arrow.png" alt="" />
          </a>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-2 h-full">
        <Link href={`/gallery/${data?.data[0].id}`}>
          <a className="w-full min-h-[300px] h-auto md:w-1/2">
            <div className="bg-cover h-[60%]" style={{ backgroundImage: `url(${data?.data[0].CoverImage.url})` }} />
            <div className="h-[40%] bg-[url('/gallery-bg.png')] bg-cover flex items-center">
              <div className="text-white px-6">
                <h2 className="text-lg font-bold mb-2">{data?.data[0].Title}</h2>
                <div
                  className="text-sm font-extralight pt-1 max-w-[70%]"
                  dangerouslySetInnerHTML={{ __html: data?.data[0].Excerpt }}
                />
              </div>
            </div>
          </a>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full md:w-1/2">
          {data?.data.slice(1, data?.data.length).map(({ id, Title, CoverImage }, i) => (
            <Link href={`/gallery/${id}`} key={i}>
              <a className="flex flex-row md:flex-col items-center md:items-start gap-2">
                <div className="w-1/2 md:w-full">
                  <img src={CoverImage?.url} alt="" className="w-full object-cover" />
                </div>
                <p className="text-xs text-left font-extralight pt-1">{Title}</p>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
