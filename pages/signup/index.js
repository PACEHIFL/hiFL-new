import React, { useState } from "react";
import Link from "next/link";
import AuthLayout from "../../components/layout/AuthLayout";
import InputField from "../../components/authpages/InputField";

const institutions = ["ABUAD", "UNN", "UNILAG", "UNIBEN"];
const heardAboutUs = ["Social Media", "Press", "Adverts", "School Blog"];

const Signup = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    supportingInst: "",
    hearAbtUs: "",
    consent: false,
  };
  const [data, setData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { type, name, value, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setData({ ...data, [name]: val });
  };

  return (
    <AuthLayout>
      <div className="px-8 text-[#000229] ">
        <h2 className="text-2xl text-[#000229] mb-3">Create your free HiFL account</h2>
        <div className="w-[80%]">
          <div className="border border-x-0 border-[#F4C316] pt-6 pb-12">
            <h2 className="text-3xl text-[#000229] uppercase font-bold">Sign Up</h2>
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex gap-12 justify-between items-center mb-8">
                <div className="w-full relative">
                  <InputField
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    placeholder="First Name"
                    data={data}
                    required
                  />
                </div>
                <div className="w-full">
                  <InputField
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    placeholder="Last Name"
                    data={data}
                    required
                  />
                </div>
              </div>
              <div className="flex gap-12 justify-between items-center mb-8">
                <div className="w-full">
                  <InputField
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Email Address"
                    data={data}
                    required
                  />
                </div>
                <div className="w-full">
                  <InputField
                    type="tel"
                    name="phoneNumber"
                    onChange={handleChange}
                    placeholder="Phone Number"
                    data={data}
                    required
                  />
                </div>
              </div>
              <div className="flex gap-12 justify-between items-center mb-8">
                <div className="w-full">
                  <InputField
                    type="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="Password"
                    data={data}
                    required
                  />
                </div>
                <div className="w-full">
                  <InputField
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    data={data}
                    required
                  />
                </div>
              </div>
              <div className="flex gap-12 justify-between items-center mb-3">
                <div className="w-full">
                  <select
                    name="supportingInst"
                    value={data.supportingInst}
                    onChange={handleChange}
                    className="w-full border-b border-[#767670] py-2 px-4 outline-none bg-[#E8E8E8] focus:bg-[#FBFBFB] cursor-pointer">
                    <option value="">Which Institution are you supporting?</option>
                    {institutions.map((sch, i) => (
                      <option value={sch} key={i}>
                        {sch}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full">
                  <select
                    value={data.hearAbtUs}
                    name="hearAbtUs"
                    onChange={handleChange}
                    className="w-full border-b border-[#767670] py-2 px-4 outline-none bg-[#E8E8E8] focus:bg-[#FBFBFB] cursor-pointer">
                    <option value="">How did you hear about us ?</option>
                    {heardAboutUs.map((medium, i) => (
                      <option value={medium} key={i}>
                        {medium}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex gap-3 items-center py-3">
                <input
                  type="checkbox"
                  name="consent"
                  checked={data.consent}
                  onChange={handleChange}
                  className="checkbox checkbox-xs checkbox-primary border-[#767670] outline-none rounded-sm"
                />
                <p>I have read, understand and agree to terms and conditions and privacy policy of HiFL.</p>
              </div>

              <button className="btn btn-wide btn-primary capitalize font-bold mt-3"> Sign Up</button>
            </form>
          </div>

          <div className="flex justify-center pt-12 pb-4">
            <div className="flex items-center gap-12">
              <h3 className="text-[#000229] text-lg">Already have an account ?</h3>
              <Link href="/signin">
                <a className="btn btn-wide btn-accent capitalize font-bold">Sign In</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Signup;
