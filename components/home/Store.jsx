import React from "react";
import Link from "next/link";
import ProductCard from "../store/ProductCard";
import useFetch from "../../hooks/useFetch";

const Store = () => {
  const baseURL = process.env.CMS_URL;
  const { data, loading } = useFetch(`${baseURL}/products?populate=*`);

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-[#000229] font-bold text-lg font-redhat">Store</h2>
        <Link href="/store">
          <a className="flex gap-2 text-sm font-bold">
            <span>View More</span>
            <img src="/right-arrow.png" alt="" />
          </a>
        </Link>
      </div>
      <div className="flex justify-center">
        <div className="pt-12 pb-6 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5 text-secondary">
          {data?.data.slice(0, 4).map((product, i) => (
            <ProductCard product={product} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
