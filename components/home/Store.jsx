import React from "react";
import Link from "next/link";
import { products } from "../../helpers/data";
import ProductCard from "../store/ProductCard";

const Store = () => {
  const producsts = [
    {
      img: "/jersey.png",
      name: " Unical Malabites Home Jersey",
      discount: true,
      discountType: "15%",
      discountPrice: 5525.5,
      price: 6500,
      url: "#",
    },
    {
      img: "/jersey.png",
      name: " Unical Malabites Home Jersey",
      discount: true,
      discountType: "15%",
      discountPrice: 5525.5,
      price: 6500,
      url: "#",
    },
    {
      img: "/jersey.png",
      name: " Unical Malabites Home Jersey",
      discount: false,
      discountType: "15%",
      discountPrice: 5525.5,
      price: 6500,
      url: "#",
    },
    {
      img: "/jersey.png",
      name: " Unical Malabites Home Jersey",
      discount: true,
      discountType: "15%",
      discountPrice: 5525.5,
      price: 6500,
      url: "#",
    },
    {
      img: "/jersey.png",
      name: " Unical Malabites Home Jersey",
      discount: true,
      discountType: "15%",
      discountPrice: 5525.5,
      price: 6500,
      url: "#",
    },
  ];
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
        <div className="pt-12 pb-6 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 text-secondary">
          {products.slice(0, 4).map((product, i) => (
            <ProductCard product={product} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
