import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getCart } from "../../redux/features/cart.slice";

const PaymentDetails = ({ addressInfo: { shipToAddress }, total }) => {
  const [cartItems, setCartItems] = useState([]);
  const payload = { ShipingOption: shipToAddress, Total: total, items: [...cartItems] };

  console.log(payload, "final");

  useEffect(() => {
    if (getCart()) {
      setCartItems(getCart());
    }
  }, []);

  const handlePlaceOrder = () => {
    if (shipToAddress == "") {
      toast.error("Please select a shipping mode", { autoClose: 1500 });
      return;
    }
  };
  return (
    <details className="px-3 py-5 bg-[#F9F7F7] font-redhat text-secondary" open>
      <summary className="flex justify-between items-center pb-1 list-none cursor-pointer">
        <h2 className="text-sm font-semibold uppercase">Payment Details</h2>
        <span className="w-5 h-5 bg-warning"></span>
      </summary>

      <div className="border-t border-[#8C8C8C80]">
        <div className="my-10 p-6 bg-white space-y-4">
          <div>
            <h2>Please make payment to the foillowing account</h2>
            <h2>
              Bank Name: <span></span>
            </h2>
            <h2>
              Bank Account: <span></span>
            </h2>
          </div>
          <button className="btn btn-success text-white btn-wide text-sm" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      </div>
    </details>
  );
};

export default PaymentDetails;
