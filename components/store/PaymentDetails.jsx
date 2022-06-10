import React from "react";

const PaymentDetails = () => {
  return (
    <details className="px-3 py-5 bg-[#F9F7F7] font-redhat text-secondary">
      <summary className="flex justify-between items-center pb-1 list-none cursor-pointer">
        <h2 className="text-sm font-semibold uppercase">Payment Details</h2>
        <span className="w-5 h-5 bg-warning"></span>
      </summary>

      <div className="border-t border-[#8C8C8C80]">
        <div className="my-10 p-6 bg-white space-y-4"></div>
      </div>
    </details>
  );
};

export default PaymentDetails;
