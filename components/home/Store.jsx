import React from "react";
import Link from "next/link";
import Image from "next/image";
import { formatMoney } from "../../helpers/utils";

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
            <Image src="/right-arrow.png" alt="" width={11} height={14} />
          </a>
        </Link>
      </div>
      <div className="flex justify-center">
        <div className="mt-3 flex gap-5 ">
          {producsts.map(({ img, name, discountType, discountPrice, price, discount, url }, i) => (
            <Link href={url}>
              <a className="bg-white">
                <div className="flex justify-center">
                  <Image src={img} alt="" width={175} height={200} />
                </div>
                <div className="text-center text-sm px-3 py-4">
                  <h3 className="font-bold mb-1">{name}</h3>
                  {discount && <p className="">{formatMoney(discountPrice)}</p>}
                  <p className={`${discount && "text-[#D0D0D0] line-through"}`}>{formatMoney(price)}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
