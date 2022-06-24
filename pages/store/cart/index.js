import React, { useState, useEffect } from "react";
import StoreLayout from "../../../components/layout/StoreLayout";
import { formatMoney } from "../../../helpers/utils";
import Link from "next/link";
import CartItem from "../../../components/store/CartItem";
import SimilarItems from "../../../components/store/SimilarItems";
import { useDispatch } from "react-redux";
import { getCart } from "../../../redux/features/cart.slice";

const Cart = () => {
  const initialState = { quantity: null, size: "", customize: "No", jerseyName: "", jerseyNumber: "" };
  const [orderInfo, setOrderInfo] = useState(initialState);
  const [cartItems, setCartItems] = useState([]);

  const orderTotal = cartItems.reduce(function (acc, item) {
    const price = item.DiscountPrice ? item.DiscountPrice * item.quantity : item.Price * item.Quantity;
    return acc + price;
  }, 0);
  const customizationFee = cartItems.reduce(function (acc, item) {
    const fee = item.Customization.JerseyName || item.Customization.JerseyNumber ? 2000 * item.Quantity : 0;
    return acc + fee;
  }, 0);
  const subTotal = orderTotal + customizationFee;

  useEffect(() => {
    if (getCart()) {
      setCartItems(getCart());
    }
  }, [orderInfo]);

  return (
    <StoreLayout name="cart">
      <div className="font-redhat text-secondary">
        {cartItems.length == 0 ? (
          <div className="h-[400px] flex flex-col justify-center items-center">
            <h2 className="font-bold text-xl lg:text-3xl text-[#000229]">No items in cart</h2>
            <Link href="/store">
              <a className="btn btn-primary btn-wide mt-6 border-none">Continue Shopping</a>
            </Link>
          </div>
        ) : (
          <>
            <h2 className="text-lg xl:text-xl font-semibold mb-4 border-b border-warning pb-1">
              You have {cartItems?.length || 0} item(s) in your cart
            </h2>

            <div className="flex flex-col xl:flex-row gap-4">
              <div className="w-full xl:w-8/12 space-y-2">
                {cartItems.map((cartProduct, i) => (
                  <CartItem
                    cartProduct={cartProduct}
                    orderInfo={orderInfo}
                    setOrderInfo={setOrderInfo}
                    setCartItems={setCartItems}
                    key={i}
                  />
                ))}
              </div>
              <div className="w-full md:w-4/12 min-w-[300px] bg-[#F9F7F7] rounded p-6 font-semibold uppercase h-fit">
                <h3 className="text-base mb-6">Cart Summary</h3>
                <div className="space-y-6 text-sm">
                  <div className="flex justify-between items-center gap-6">
                    <p className="text-[#8C8C8C] ">Order Total</p>
                    <p className="">{formatMoney(orderTotal)}</p>
                  </div>
                  <div className="flex justify-between items-center gap-6">
                    <p className="text-[#8C8C8C] ">Customization Fee</p>
                    <p className="">{formatMoney(customizationFee)}</p>
                  </div>
                  <div className="flex justify-between items-center gap-6">
                    <p className="text-[#8C8C8C] ">Sub Total</p>
                    <p className="">{formatMoney(subTotal)}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-5 md:gap-10 lg:gap-20 my-10 lg:my-20">
              <div className="w-full">
                <Link href="/store">
                  <a className="btn btn-primary w-full">Continue Shopping</a>
                </Link>
              </div>
              <div className="w-full">
                <Link href="/store/checkout">
                  <a className="btn btn-warning w-full text-secondary">Proceed to Checkout</a>
                </Link>
              </div>
            </div>
          </>
        )}

        <div className="">
          <SimilarItems />
        </div>
      </div>
    </StoreLayout>
  );
};

export default Cart;
