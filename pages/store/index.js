import React from "react";
import StoreLayout from "../../components/layout/StoreLayout";
import Link from "next/link";
import { formatMoney } from "../../helpers/utils";
import ProductCard from "../../components/store/ProductCard";

const Store = () => {
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
    <StoreLayout>
      <div className="mb-10">
        <div className="mb-6">
          <Link href="#">
            <a>
              <img src="/store-banner1.png" alt="" className="w-full" />
            </a>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <Link href="#">
            <a className="">
              <img src="/store-banner2.png" alt="" className="w-full md:w-auto" />
            </a>
          </Link>
          <Link href="#">
            <a className="">
              <img src="/store-banner3.png" alt="" className="w-full md:w-auto" />
            </a>
          </Link>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center border-b border-warning pb-1 mb-2">
          <h2 className="text-lg xl:text-xl font-semibold">Shop your favourite merchandize</h2>
          <div className="flex gap-2 items-center text-sm">
            <h3>Sort by:</h3>
            <div className="flex gap-1 items-center cursor-pointer">
              <div className="dropdown xl:dropdown-hover dropdown-end">
                <label tabindex="0" className="m-1 text-[#767575] cursor-pointer">
                  Category
                </label>
                <ul tabindex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box divide-y">
                  <li className="p-2">All</li>
                  <li className="p-2">Kits</li>
                  <li className="p-2">Equipment</li>
                  <li className="p-2">Wearables</li>
                </ul>
              </div>
              <div>
                <img src="/stroke-down.png" alt="" className="w-[12px]" />
              </div>
            </div>
          </div>
        </div>
        <p>{products.length} Kits found</p>
        <div className="mt-2 pt-16 pb-6 border-t border-[#AFAFAF] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 text-secondary">
          {products.map((product, i) => (
            <ProductCard product={product} key={i} />
          ))}
        </div>
      </div>
    </StoreLayout>
  );
};

export default Store;
