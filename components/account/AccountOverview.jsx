import React, { useState } from "react";
import AccountLayout from "../layout/AccountLayout";
import InputField from "./InputField";

const AccountOverview = () => {
  const initialState = { firstName: "", lastName: "", email: "", phoneNumber: "", institution: "", rememberMe: false };
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

  return (
    <AccountLayout name="account overview">
      <div className="p-8">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-between items-center mb-4">
            <div className="w-full">
              <InputField
                type="text"
                name="firstName"
                onChange={handleChange}
                placeholder="First Name"
                data={data}
                //required
              />
            </div>
            <div className="w-full">
              <InputField
                type="text"
                name="lastName"
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
                name="email"
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
                name="phoneNumber"
                onChange={handleChange}
                placeholder="Phone Number"
                data={data}
                //required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-between items-center mb-10">
            <div className="w-full">
              <InputField
                type="text"
                name="institution"
                onChange={handleChange}
                placeholder="Institution"
                data={data}

                //required
              />
            </div>
            <div className="w-full">
              {/* <InputField
                type="tel"
                name="phoneNumber"
                onChange={handleChange}
                placeholder="Phone Number"
                data={data}
                //required
              /> */}
            </div>
          </div>
          <button className={`${loading && "loading"} btn btn-wide btn-primary capitalize font-bold mt-3`}>
            {loading ? "" : "Save"}
          </button>
        </form>
      </div>
    </AccountLayout>
  );
};

export default AccountOverview;
