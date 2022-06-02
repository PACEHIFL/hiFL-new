import React, { useState, useEffect } from "react";
import AccountLayout from "../layout/AccountLayout";
import InputField from "./InputField";
import { isLoggedIn } from "../../redux/features/auth.slice";
import { states, countries } from "../../helpers/data";

const AccountOverview = () => {
  const initialState = {
    Firstname: "",
    Lastname: "",
    Email: "",
    Phonenumber: "",
    Institution: "",
    Gender: "",
    Birthday: "",
    Address: "",
    State: "",
    Country: "",
  };
  const [data, setData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { type, name, value, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setData({ ...data, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (data.email == "" || data.password == "") {
    //   return toast.error("Please all fields are required");
    // }

    // if (data.email && data.password) {
    //   const payload = { Email: data.email, Password: data.password };
    //   dispatch(login({ payload, toast, router }));
    // }
  };

  useEffect(() => {
    if (isLoggedIn()) {
      setData(isLoggedIn().data.User);
    }
  }, []);

  return (
    <AccountLayout name="account overview">
      <div className="p-8">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-between items-center mb-4">
            <div className="w-full">
              <InputField
                type="text"
                name="Firstname"
                onChange={handleChange}
                placeholder="First Name"
                data={data}
                //required
              />
            </div>
            <div className="w-full">
              <InputField
                type="text"
                name="Lastname"
                onChange={handleChange}
                placeholder="Last Name"
                data={data}
                //required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-between items-center mb-4">
            <div className="w-full">
              <InputField
                type="email"
                name="Email"
                onChange={handleChange}
                placeholder="Email Address"
                data={data}
                disabled
                //required
              />
            </div>
            <div className="w-full">
              <InputField
                type="tel"
                name="Phonenumber"
                onChange={handleChange}
                placeholder="Phone Number"
                data={data}
                //required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-between items-center mb-4">
            <div className="w-full">
              <InputField
                type="text"
                name="Institution"
                onChange={handleChange}
                placeholder="Institution"
                data={data}

                //required
              />
            </div>
            <div className="w-full">
              <label htmlFor="Gender" className="font-bold text-sm">
                Gender
              </label>
              <select
                name="Gender"
                value={data.Gender}
                onChange={handleChange}
                className={`w-full border text-sm border-[#F4F4F4] mt-1 py-3 px-4 outline-none rounded`}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-between items-center mb-4">
            <div className="w-full">
              <InputField
                type="date"
                name="Birthday"
                onChange={handleChange}
                placeholder="Birthday"
                data={data}
                //required
              />
            </div>
            <div className="w-full">
              <InputField
                type="text"
                name="Address"
                onChange={handleChange}
                placeholder="Address"
                data={data}
                //required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-between items-center mb-4">
            <div className="w-full">
              <label htmlFor="State" className="font-bold text-sm">
                State
              </label>
              <select
                name="State"
                value={data.State}
                onChange={handleChange}
                className={`w-full border text-sm border-[#F4F4F4] mt-1 py-3 px-4 outline-none rounded`}>
                <option value="">Select State</option>
                {states?.map((state, i) => (
                  <option value={state} key={i}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full">
              <label htmlFor="State" className="font-bold text-sm">
                Country
              </label>
              <select
                name="Country"
                value={data.Country}
                onChange={handleChange}
                className={`w-full border text-sm border-[#F4F4F4] mt-1 py-3 px-4 outline-none rounded`}>
                <option value="Nigeria">Nigeria</option>
                {countries?.map((country, i) => (
                  <option value={country} key={i}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button className={`${loading && "loading"} btn btn-wide btn-primary capitalize font-bold mt-10`}>
            {loading ? "" : "Save"}
          </button>
        </form>
      </div>
    </AccountLayout>
  );
};

export default AccountOverview;
