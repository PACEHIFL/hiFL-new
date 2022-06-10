import React from "react";
import { formatMoney } from "../../helpers/utils";

const ShippingDetails = ({ addressInfo, handleChange }) => {
  return (
    <details className="px-3 py-5 bg-[#F9F7F7] font-redhat text-secondary">
      <summary className="flex justify-between items-center pb-1 list-none cursor-pointer">
        <h2 className="text-sm font-semibold uppercase">Delivery/Shipping Details</h2>
        <span className="w-5 h-5 bg-warning"></span>
      </summary>

      <div className="border-t border-[#8C8C8C80]">
        <h3 className="mt-5 text-sm text-[#8C8C8C] font-semibold">Where do you want your order delivered?</h3>
        <div className="mt-5 mb-10 p-6 bg-white space-y-4">
          <div className="flex gap-2">
            <h3 className="w-full md:w-4/12 text-sm text-[#8C8C8C] font-semibold uppercase">Ship to Address</h3>
            <input
              name="shipToAddress"
              type="checkbox"
              checked={addressInfo.shipToAddress}
              onChange={handleChange}
              className="checkbox checkbox-xs checkbox-primary rounded-md"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <h3 className="w-full md:w-4/12 text-sm text-[#8C8C8C] font-semibold uppercase">Rate</h3>
            <p className="w-full md:w-8/12 text-sm text-[#8C8C8C]">{formatMoney(1500)}</p>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <h3 className="w-full md:w-4/12 text-sm text-[#8C8C8C] font-semibold uppercase">Date of Delivery</h3>
            <p className="w-full md:w-8/12 text-sm text-[#8C8C8C]">29-06-2022</p>
          </div>
        </div>
      </div>
    </details>
  );
};

export default ShippingDetails;
