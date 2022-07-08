import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getCart, placeOrder } from "../../redux/features/cart.slice";
import { isLoggedIn } from "../../redux/features/auth.slice";

const PaymentDetails = ({
  addressInfo: { shipToAddress, address, state, lga, nearestBus, phoneNumber },
  total,
  delivery,
}) => {
  const [cartItems, setCartItems] = useState([]);
  const [userId, setUserId] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const { loading } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (e) => {
    setPaymentMode(e.target.value);
  };

  const handlePlaceOrder = () => {
    if (shipToAddress == "") {
      toast.error("Please select a shipping mode", { autoClose: 1500 });
      return;
    }
    if (shipToAddress !== "Pickup" && address == "") {
      toast.error("Please fill in your address", { autoClose: 1500 });
      return;
    }
    if (shipToAddress !== "Pickup" && state == "") {
      toast.error("Please fill in your state", { autoClose: 1500 });
      return;
    }
    if (shipToAddress !== "Pickup" && phoneNumber == "") {
      toast.error("Please fill in your phone number", { autoClose: 1500 });
      return;
    }
    if (!paymentMode) {
      toast.error("Please select a payment mode", { autoClose: 1500 });
      return;
    }

    //final order payload
    const payload = {
      User: userId,
      OrderItems: [...cartItems],
      DeliveryAddress: {
        Address: address,
        State: state,
        Lga: lga,
        NearestBusStop: nearestBus,
        PhoneNumber: phoneNumber,
      },
      ShippingOption: { ShippingName: shipToAddress, ShippingFee: delivery.toFixed(2) },

      Total: total.toFixed(2),
    };
    dispatch(placeOrder({ payload, toast, router }));
  };

  useEffect(() => {
    if (getCart()) {
      setCartItems(getCart());
    }
    if (isLoggedIn()) {
      setUserId(isLoggedIn().data.User._id);
    }
  }, []);

  return (
    <details className="px-3 py-5 bg-[#F9F7F7] font-redhat text-secondary" open>
      <summary className="flex justify-between items-center pb-1 list-none cursor-pointer">
        <h2 className="text-sm font-semibold uppercase">Payment</h2>
        <span className={`w-5 h-5 ${paymentMode ? "bg-[#00AB11]" : "bg-warning"}`}></span>
      </summary>

      <div className="border-t border-[#8C8C8C80]">
        <div className="my-10 p-6 bg-white space-y-4">
          <div className="mb-4">
            <div className="flex gap-3 cursor-pointer">
              <input
                type="radio"
                name="paymentMode"
                value="bankTransfer"
                className="radio radio-sm radio-primary"
                onChange={handleChange}
                // checked
              />
              <span className="font-semibold">Bank Transfer</span>
            </div>
            {paymentMode == "bankTransfer" && (
              <div className="pl-8">
                <h2 className="my-4">Please make payment to the following account</h2>
                <h2>
                  Bank Name: <span className="font-bold">Stanbic IBTC</span>
                </h2>
                <h2>
                  Bank Account: <span className="font-bold">0024916531</span>
                </h2>
              </div>
            )}
          </div>

          <button
            className={`${loading && "loading"} btn btn-success text-white btn-wide text-sm`}
            onClick={handlePlaceOrder}>
            {loading ? "" : "Place Order"}
          </button>
        </div>
      </div>
    </details>
  );
};

export default PaymentDetails;
