import React from "react";
import ProductCard from "./ProductCard";

const SimilarItems = () => {
  const products = [
    {
      id: 234,
      name: "UNN Lions Home Authentic Shirt",
      bestSelling: false,
      img: "/hiversa-jersey.png",
      discountPercent: 10,
      discountPrice: null,
      price: 5225,
    },
    {
      id: 5553,
      name: "UNN Lions Home Authentic Shirt",
      bestSelling: true,
      img: "/hiversa-jersey.png",
      discountPercent: 10,
      discountPrice: 4225,
      price: 5225,
    },
    {
      id: 45445,
      name: "UNN Lions Home Authentic Shirt",
      bestSelling: true,
      img: "/hiversa-jersey.png",
      discountPercent: 10,
      discountPrice: 4225,
      price: 5225,
    },
  ];
  return (
    <>
      <h2 className="border-b border-warning pb-1 text-lg xl:text-xl font-semibold">Items You May Like</h2>
      <div className="pt-12 pb-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 text-secondary">
        {products.slice(0, 3).map((product, i) => (
          <ProductCard product={product} key={i} />
        ))}
      </div>
    </>
  );
};

export default SimilarItems;
