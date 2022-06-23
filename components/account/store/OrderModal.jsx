import React from "react";
import Moment from "react-moment";
import { formatMoney } from "../../../helpers/utils";

const OrderModal = ({ singleOrder: { OrderRef, OrderStatus, OrderDate, OrderItems, Total, ShippingOption } }) => {
  const customizationFee = OrderItems?.reduce(function (acc, item) {
    const fee = item.Customization.JerseyName || item.Customization.jerseyNumber ? 2000 * item.Quantity : 0;
    return acc + fee;
  }, 0);

  return (
    <div>
      <div className="flex justify-end">
        <label
          htmlFor="order-modal"
          className="absolute right-2 top-2 lg:right-5 lg:top-5 p-4 lg:hover:bg-[#f5f5f5] lg:hover:rounded-full  cursor-pointer modal-button">
          <img src="/close-accent.svg" alt="" className="w-[12px]" />
        </label>
      </div>

      <div className="mb-4">
        <h2>Order Ref: {OrderRef}</h2>
        <p className="text-[#7E7E7E] text-sm md:text-base">
          Date Placed: <Moment format="MM-DD-YYYY" date={OrderDate} />
        </p>
        <p
          className={`${
            OrderStatus == "PROCESSING"
              ? "bg-[#0D6C8C]"
              : OrderStatus == "PENDING"
              ? "bg-warning"
              : OrderStatus == "DELIVERED"
              ? "bg-[#00AB11]"
              : "bg-accent"
          } inline-flex px-2 text-white text-sm uppercase rounded`}>
          {OrderStatus}
        </p>
      </div>
      <div className="space-y-2">
        {OrderItems?.map(
          (
            { CoverImage, Title, Size, Quantity, Price, DiscountPrice, Customization: { JerseyName, JerseyNumber } },
            i
          ) => (
            <div key={i}>
              <div className="bg-[#F9F7F7] rounded p-4 flex items-center gap-3 md:gap-6">
                <div className="">
                  <img src={CoverImage?.url} alt="" className="w-[50px] md:w-[75px]" />
                </div>

                <div className="flex flex-col justify-between w-full items-start md:items-center md:flex-row gap-3 md:gap-6">
                  <div>
                    <h3 className="text-sm font-semibold">{Title}</h3>
                    <div className="fle gap-2 justify-between text-[#8C8C8C] text-xs uppercase">
                      <p className="">Size: {Size}</p>
                      <p className="text-[#8C8C8C] text-xs uppercase">Quantity: {Quantity}</p>
                      {(JerseyName || JerseyNumber) && (
                        <p className="">
                          Customization: {JerseyName} {JerseyNumber && `(${JerseyNumber})`}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col md:items-center">
                    <p className="font-semibold">
                      {formatMoney(DiscountPrice ? DiscountPrice * Quantity : Price * Quantity)}
                    </p>
                    {DiscountPrice && (
                      <div className="flex items-center gap-2 text-xs">
                        <p className={` ${DiscountPrice && "text-[#8C8C8C] line-through"} `}>{formatMoney(Price)}</p>
                        {/* <p className="px-2 bg-warning bg-opacity-50 rounded-b-lg text-[#3A3A3A]">
                -{discountPercent(Price, DiscountPrice)}%
              </p> */}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      <div className="flex justify-end mt-4 text-right">
        <div className="space-y-1">
          {customizationFee > 0 && <p>Customization Fee: {formatMoney(customizationFee)}</p>}
          <p>Sub-Total: {formatMoney(Total?.$numberDecimal - ShippingOption?.ShippingFee.$numberDecimal)}</p>
          <p>Shipping Fee: {formatMoney(ShippingOption?.ShippingFee.$numberDecimal)}</p>
          <p className="font-semibold underline underline-offset-2">Total: {formatMoney(Total?.$numberDecimal)}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
