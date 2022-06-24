import React from "react";
import Skeleton from "react-loading-skeleton";
import useFetch from "../../hooks/useFetch";
import ProductCard from "./ProductCard";

const SimilarItems = () => {
  const baseURL = process.env.CMS_URL;
  const { data, loading } = useFetch(`${baseURL}/products?populate=*`);

  return (
    <>
      <h2 className="border-b border-warning pb-1 text-lg xl:text-xl font-semibold">Items You May Like</h2>
      <div className="pt-12 pb-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 text-secondary">
        {loading ? (
          <>
            <div className="w-full">
              <Skeleton height={300} />
            </div>
            <div className="w-full">
              <Skeleton height={300} />
            </div>
            <div className="w-full">
              <Skeleton height={300} />
            </div>
          </>
        ) : (
          data?.data.slice(0, 3).map((product, i) => <ProductCard product={product} key={i} />)
        )}
      </div>
    </>
  );
};

export default SimilarItems;
