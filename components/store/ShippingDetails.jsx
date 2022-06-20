import React, { useState, useEffect, useRef } from "react";
import { formatMoney } from "../../helpers/utils";

const ShippingDetails = ({ addressInfo, shippingOption, handleChange }) => {
  const handleSelected = () => shippingOption.find((p) => p.option == addressInfo.shipToAddress);

  console.log(addressInfo, "address");

  return (
    <details className="px-3 py-5 bg-[#F9F7F7] font-redhat text-secondary" open>
      <summary className="flex justify-between items-center pb-1 list-none cursor-pointer">
        <h2 className="text-sm font-semibold uppercase">Delivery/Shipping Details</h2>
        <span className="w-5 h-5 bg-warning"></span>
      </summary>

      <div className="border-t border-[#8C8C8C80]">
        <h3 className="mt-5 text-sm text-[#8C8C8C] font-semibold">Where do you want your order delivered?</h3>
        <div className="mt-5 mb-10 p-6 bg-white space-y-4">
          <div className="flex  items-centergap-2">
            <h3 className="w-full md:w-4/12 text-sm text-[#8C8C8C] font-semibold uppercase">Shipping Option</h3>
            {/* <input
              name="shipToAddress"
              type="checkbox"
              checked={addressInfo.shipToAddress}
              onChange={handleChange}
              className="checkbox checkbox-xs checkbox-primary rounded-md"
            /> */}
            <select
              name="shipToAddress"
              value={addressInfo.shipToAddress}
              onChange={handleChange}
              className="text-sm text-[#8C8C8C] border-b pr-2 outline-none rounded cursor-pointer">
              <option value="" disabled>
                Select shipping option
              </option>
              {shippingOption.map(({ option }, i) => (
                <option value={option} key={i}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <h3 className="w-full md:w-4/12 text-sm text-[#8C8C8C] font-semibold uppercase">Rate</h3>
            <p className="w-full md:w-8/12 text-sm text-[#8C8C8C]">{formatMoney(handleSelected()?.price || 0)}</p>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <h3 className="w-full md:w-4/12 text-sm text-[#8C8C8C] font-semibold uppercase">Delivery Timeline</h3>
            <p className="w-full md:w-8/12 text-sm text-[#8C8C8C]">{handleSelected()?.timeline}</p>
          </div>
        </div>
      </div>
    </details>
  );
};

export default ShippingDetails;
