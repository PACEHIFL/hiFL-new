import React from "react";
import StoreLayout from "../../../components/layout/StoreLayout";
import { formatMoney } from "../../../helpers/utils";
import Link from "next/link";
import CartItem from "../../../components/store/CartItem";
import SimilarItems from "../../../components/store/SimilarItems";

const Cart = () => {
  const cartProducts = [
    {
      img: "/hiversa-jersey.png",
      title: "UNN Lions Home Authentic Shirt",
      size: "M",
      jerseyName: "Fejiro",
      jerseyNumber: 7,
      quantity: 1,
      price: 6000,
      discountPrice: null,
    },
    {
      img: "/hiversa-jersey.png",
      title: "UNN Lions Home Authentic Shirt",
      size: "M",
      jerseyName: "Fejiro",
      jerseyNumber: 7,
      quantity: 1,
      price: 6000,
      discountPrice: 4500,
    },
    {
      img: "/hiversa-jersey.png",
      title: "UNN Lions Home Authentic Shirt",
      size: "M",
      jerseyName: "Fejiro",
      jerseyNumber: 7,
      quantity: 1,
      price: 6000,
      discountPrice: 4500,
    },
  ];
  return (
    <StoreLayout name="cart">
      <div className="font-redhat text-secondary">
        <h2 className="text-lg xl:text-xl font-semibold mb-4 border-b border-warning pb-1">
          You have 2 item(s) in your cart
        </h2>

        <div className="flex flex-col xl:flex-row gap-4">
          <div className="w-full xl:w-8/12 space-y-2">
            {cartProducts.map((cartProduct, i) => (
              <CartItem cartProduct={cartProduct} key={i} />
            ))}
          </div>
          <div className="w-full md:w-4/12 min-w-[300px] bg-[#F9F7F7] rounded p-6 font-semibold uppercase h-fit">
            <h3 className="text-base mb-6">Cart Summary</h3>
            <div className="space-y-6 text-sm">
              <div className="flex justify-between items-center gap-6">
                <p className="text-[#8C8C8C] ">Order Total</p>
                <p className="">{formatMoney(6450)}</p>
              </div>
              <div className="flex justify-between items-center gap-6">
                <p className="text-[#8C8C8C] ">Customization Fee</p>
                <p className="">{formatMoney(6450)}</p>
              </div>
              <div className="flex justify-between items-center gap-6">
                <p className="text-[#8C8C8C] ">Sub Total</p>
                <p className="">{formatMoney(6450)}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-5 md:gap-10 lg:gap-20 my-10 lg:my-20">
          <div className="w-full">
            <Link href="#">
              <a className="btn btn-primary w-full">Continue Shopping</a>
            </Link>
          </div>
          <div className="w-full">
            <Link href="checkout">
              <a className="btn btn-warning w-full text-secondary">Proceed to Checkout</a>
            </Link>
          </div>
        </div>

        <div className="">
          <SimilarItems />
        </div>
      </div>
    </StoreLayout>
  );
};

export default Cart;
