import React, { useState } from "react";
import AuthLayout from "../../components/layout/AuthLayout";
import Link from "next/link";
import InputField from "../../components/authpages/InputField";

const Signin = () => {
  const initialState = { email: "", password: "", rememberMe: false };
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
        <h2 className="text-2xl text-[#000229] mb-3">Manage your HiFL Account</h2>
        <div className="w-[80%]">
          <div className="border border-x-0 border-[#F4C316] pt-6 pb-12">
            <h2 className="text-3xl text-[#000229] uppercase font-bold">Log In</h2>
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex gap-12 justify-between items-center">
                <div className="w-full">
                  <InputField
                    type="text"
                    name="email"
                    onChange={handleChange}
                    placeholder="Email Address"
                    data={data}
                    required
                  />
                </div>
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
              </div>

              <div className="flex justify-end py-3">
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={data.rememberMe}
                    onChange={handleChange}
                    className="checkbox checkbox-xs checkbox-primary border-[#767670] outline-none rounded-sm"
                  />
                  <p>Remember Me</p>
                </div>
              </div>

              <div className="flex justify-between items-center mt-3">
                <button className="btn btn-wide btn-primary capitalize font-bold"> Sign In</button>
                <Link href="#">
                  <a className="text-primary">Forgot your password? click here to reset</a>
                </Link>
              </div>
            </form>
          </div>

          <div className="flex justify-center pt-12 pb-4">
            <div className="flex items-center gap-12">
              <h3 className="text-[#000229] text-lg">Don't have an account ?</h3>
              <Link href="/signup">
                <a className="btn btn-wide btn-accent capitalize font-bold">Sign Up</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Signin;
