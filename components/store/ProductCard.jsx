import React from "react";
import Link from "next/link";
import { formatMoney } from "../../helpers/utils";

const ProductCard = ({ product: { name, bestSelling, img, discountPercent, discountPrice, price, id } }) => {
  return (
    <Link href={`/store/${id}`}>
      <a className="p-5 bg-[#F9F7F7] rounded-lg space-y-2 relative mb-6 hover:shadow hover:-translate-y-[2px] transition-transform cursor-pointer">
        <div>
          {bestSelling && <img src="/star.png" className="absolute top-5 left-5" />}
          {discountPercent && (
            <p className="absolute top-0 right-5 px-2 py-1 bg-warning bg-opacity-50 rounded-b-lg text-[#3A3A3A]">
              -{discountPercent}%
            </p>
          )}
        </div>
        <div className="flex justify-center">
          <img src={img} alt={name} className="-mt-14" />
        </div>
        <p className="text-center px-8 font-semibold">{name}</p>
        <div className="flex justify-between items-center">
          <div className="flex gap-1 items-end">
            {discountPrice && <p className="">{formatMoney(discountPrice)}</p>}
            <p className={`${discountPrice && "text-xs text-[#D0D0D0] line-through"}`}>{formatMoney(price)}</p>
          </div>
          <button className="px-4 btn btn-sm btn-primary capitalize">Buy Now</button>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
