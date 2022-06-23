import React, { useState, useEffect } from "react";
import StoreLayout from "../../../components/layout/StoreLayout";
import { useRouter } from "next/router";
import { isLoggedIn } from "../../../redux/features/auth.slice";
import { getCart } from "../../../redux/features/cart.slice";
import { formatMoney } from "../../../helpers/utils";
import Link from "next/link";
import SimilarItems from "../../../components/store/SimilarItems";
import AddressDetails from "../../../components/store/AddressDetails";
import ShippingDetails from "../../../components/store/ShippingDetails";
import PaymentDetails from "../../../components/store/PaymentDetails";
import { shippingOption } from "../../../helpers/data";

const Checkout = () => {
  const initialState = { address: "", state: "", lga: "", nearestBus: "", phoneNumber: "", shipToAddress: "" };
  const [addressInfo, setAddressInfo] = useState(initialState);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const router = useRouter();

  const handleSelected = () => shippingOption.find((p) => p.option == addressInfo.shipToAddress);

  const orderTotal = cartItems.reduce(function (acc, item) {
    const price = item.DiscountPrice ? item.DiscountPrice * item.Quantity : item.Price * item.Quantity;
    return acc + price;
  }, 0);
  const customizationFee = cartItems.reduce(function (acc, item) {
    const fee = item.Customization.JerseyName || item.Customization.jerseyNumber ? 2000 * item.Quantity : 0;
    return acc + fee;
  }, 0);
  const subTotal = orderTotal + customizationFee;
  const delivery = handleSelected()?.price || 0;

  useEffect(() => {
    setTotal(subTotal + delivery);
  }, [subTotal, delivery]);

  const handleChange = (e) => {
    const { type, name, value, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setAddressInfo({ ...addressInfo, [name]: val });
  };

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push({
        pathname: "/signin",
        query: { redirect: router.pathname },
      });
    } else {
      const { Phonenumber } = isLoggedIn().data.User;
      const { Address, State } = isLoggedIn().data.User.props;
      setAddressInfo({ ...addressInfo, address: Address, state: State, phoneNumber: Phonenumber });
    }
    if (getCart()) {
      setCartItems(getCart());
    }
  }, []);

  return (
    <StoreLayout name="checkout">
      {cartItems.length == 0 ? (
        <div className="h-[400px] flex flex-col justify-center items-center">
          <h2 className="font-bold text-xl lg:text-3xl text-[#000229]">No items in cart</h2>
          <Link href="/store">
            <a className="btn btn-primary btn-wide mt-6 border-none">Continue Shopping</a>
          </Link>
        </div>
      ) : (
        <div className="font-redhat text-secondary">
          <h2 className="text-lg xl:text-xl font-semibold mb-4 border-b border-warning pb-1">Checkout</h2>

          <div className="flex flex-col xl:flex-row gap-4">
            <div className="w-full xl:w-8/12 space-y-6">
              <ShippingDetails
                addressInfo={addressInfo}
                handleChange={handleChange}
                setAddressInfo={setAddressInfo}
                shippingOption={shippingOption}
              />
              {addressInfo.shipToAddress !== "Pickup" && (
                <AddressDetails addressInfo={addressInfo} handleChange={handleChange} />
              )}
              <PaymentDetails addressInfo={addressInfo} total={total} delivery={delivery} />
            </div>
            <div className="w-full md:w-4/12 min-w-[300px] bg-[#F9F7F7] rounded p-6 font-semibold uppercase h-fit">
              <h3 className="text-base mb-6">Your Order</h3>
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
                <div className="flex justify-between items-center gap-6">
                  <p className="text-[#8C8C8C] ">delivery</p>
                  <p className="">{formatMoney(delivery)}</p>
                </div>
                <div className="flex justify-between items-center gap-6">
                  <p className="text-[#8C8C8C] ">Total</p>
                  <p className="">{formatMoney(total)}</p>
                </div>
              </div>
              <Link href="/store/cart">
                <a className="btn btn-warning w-full mt-5 text-sm">Update Cart</a>
              </Link>
            </div>
          </div>

          <div className="mt-20">
            <SimilarItems />
          </div>
        </div>
      )}
    </StoreLayout>
  );
};

export default Checkout;
