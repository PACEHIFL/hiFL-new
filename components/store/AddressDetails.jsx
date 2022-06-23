import React from "react";

const AddressDetails = ({ addressInfo: { address, state, lga, nearestBus, phoneNumber }, handleChange }) => {
  return (
    <details className="px-3 py-5 bg-[#F9F7F7] font-redhat text-secondary" open>
      <summary className="flex justify-between items-center pb-1 list-none cursor-pointer">
        <h2 className="text-sm font-semibold uppercase">Address Details</h2>
        <span className={`w-5 h-5 ${address && state && phoneNumber ? "bg-[#00AB11]" : "bg-warning"}`}></span>
      </summary>

      <div className="border-t border-[#8C8C8C80]">
        <div className="my-10 p-6 bg-white space-y-4">
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <h3 className="w-full md:w-4/12 text-sm text-[#8C8C8C] font-semibold uppercase">Address</h3>
            <input
              name="address"
              type="text"
              value={address}
              onChange={handleChange}
              className="w-full md:w-8/12 text-sm text-[#8C8C8C] focus:outline-none border-b"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <h3 className="w-full md:w-4/12 text-sm text-[#8C8C8C] font-semibold uppercase">State</h3>
            <input
              name="state"
              type="text"
              value={state}
              onChange={handleChange}
              className="w-full md:w-8/12 text-sm text-[#8C8C8C] focus:outline-none border-b"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <h3 className="w-full md:w-4/12 text-sm text-[#8C8C8C] font-semibold uppercase">LGA</h3>
            <input
              name="lga"
              type="text"
              value={lga}
              onChange={handleChange}
              className="w-full md:w-8/12 text-sm text-[#8C8C8C] focus:outline-none border-b"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <h3 className="w-full md:w-4/12 text-sm text-[#8C8C8C] font-semibold uppercase">Nearest Bus Stop</h3>
            <input
              name="nearestBus"
              type="text"
              value={nearestBus}
              onChange={handleChange}
              className="w-full md:w-8/12 text-sm text-[#8C8C8C] focus:outline-none border-b"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <h3 className="w-full md:w-4/12 text-sm text-[#8C8C8C] font-semibold uppercase">Phone Number</h3>
            <input
              name="phoneNumber"
              type="text"
              value={phoneNumber}
              onChange={handleChange}
              className="w-full md:w-8/12 text-sm text-[#8C8C8C] focus:outline-none border-b"
            />
          </div>
        </div>

        {/* <button className="btn btn-primary btn-wide text-sm">Update Address</button> */}
      </div>
    </details>
  );
};

export default AddressDetails;
