import React, { useState } from "react";
import { formatMoney } from "../../helpers/utils";

const CartItem = ({ cartProduct: { img, title, size, jerseyNumber, jerseyName, quantity, price, discountPrice } }) => {
  const initialState = { quantity: quantity, size: "", customize: "No", jerseyName: "", jerseyNumber: "" };
  const [orderInfo, setOrderInfo] = useState(initialState);

  const handleQuantity = (type) => {
    if (type == "increase") {
      setOrderInfo({ ...orderInfo, quantity: orderInfo.quantity + 1 });
    }
    if (type == "reduce" && orderInfo.quantity > 1) {
      setOrderInfo({ ...orderInfo, quantity: orderInfo.quantity - 1 });
    }
  };
  const handleDelete = () => {};

  return (
    <div className="bg-[#F9F7F7] rounded p-4 flex items-center gap-3 md:gap-6">
      <div className="flex gap-1 items-center">
        <svg
          width="16"
          height="28"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
          onClick={handleDelete}>
          <path
            opacity="0.8"
            d="M16.6433 7.48924C16.6433 7.55724 16.1104 14.298 15.806 17.1349C15.6154 18.8758 14.493 19.9318 12.8095 19.9618C11.516 19.9908 10.2498 20.0008 9.00394 20.0008C7.68127 20.0008 6.38778 19.9908 5.13221 19.9618C3.50513 19.9228 2.38183 18.8458 2.20094 17.1349C1.88778 14.288 1.36454 7.55724 1.35482 7.48924C1.34509 7.28425 1.41123 7.08925 1.54544 6.93126C1.67771 6.78526 1.86833 6.69727 2.06867 6.69727H15.9392C16.1386 6.69727 16.3195 6.78526 16.4624 6.93126C16.5957 7.08925 16.6628 7.28425 16.6433 7.48924Z"
            fill="#F90000"
          />
          <path
            d="M18 3.97686C18 3.56588 17.6761 3.24389 17.2871 3.24389H14.3714C13.7781 3.24389 13.2627 2.8219 13.1304 2.22692L12.967 1.49795C12.7385 0.616978 11.9498 0 11.0647 0H6.93624C6.0415 0 5.26054 0.616978 5.02323 1.54595L4.87054 2.22792C4.7373 2.8219 4.22185 3.24389 3.62957 3.24389H0.713853C0.32386 3.24389 0 3.56588 0 3.97686V4.35685C0 4.75783 0.32386 5.08982 0.713853 5.08982H17.2871C17.6761 5.08982 18 4.75783 18 4.35685V3.97686Z"
            fill="#F90000"
          />
        </svg>
        <img src="/hiversa-jersey.png" alt="" className="w-[60px]" />
      </div>

      <div className="flex flex-col items-start md:items-center md:flex-row gap-3 md:gap-6">
        <div>
          <h3 className="text-sm font-semibold">{title}</h3>
          <div className="fle gap-2 justify-between text-[#8C8C8C] text-xs uppercase">
            <p className="">Size: {size}</p>
            {(jerseyName || jerseyNumber) && (
              <p className="">
                Customization: {jerseyName} ({jerseyNumber})
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center text-[#7E7E7E] text-sm">
          <p
            className="px-2 py-1 border border-[#7E7E7E80] border-opacity-50 rounded-l-md cursor-pointer select-none"
            onClick={() => handleQuantity("reduce")}>
            -
          </p>
          <p className="px-3 py-1 border-y border-[#7E7E7E80]">{orderInfo.quantity}</p>
          <p
            className="px-2 py-1 border border-[#7E7E7E80] border-opacity-50 rounded-r-md cursor-pointer select-none"
            onClick={() => handleQuantity("increase")}>
            +
          </p>
        </div>
        <div className="flex flex-col md:items-center">
          <p className="font-semibold">{formatMoney(discountPrice ? discountPrice : price)}</p>
          {discountPrice && (
            <div className="flex items-center gap-2 text-xs">
              <p className={` ${discountPrice && "text-[#8C8C8C] line-through"} `}>{formatMoney(price)}</p>
              <p className="px-2 bg-warning bg-opacity-50 rounded-b-lg text-[#3A3A3A]">-10%</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
