import React, { useState } from "react";
import AuthLayout from "../../components/layout/AuthLayout";
import Link from "next/link";
import InputField from "../../components/authpages/InputField";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/features/auth.slice";
import { toast } from "react-toastify";

const Signin = () => {
  const initialState = { email: "", password: "", rememberMe: false };
  const [data, setData] = useState(initialState);

  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.email == "" || data.password == "") {
      return toast.error("Please all fields are required");
    }
// console.log(data)
    if (data.email && data.password) {
      const payload = { Email: data.email, Password: data.password };
      dispatch(login({ payload, toast }));
    }
  };

  const handleChange = (e) => {
    const { type, name, value, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setData({ ...data, [name]: val });
  };

  return (
    <AuthLayout>
      <div className="px-4 lg:px-8 text-[#000229] ">
        <h2 className="text-lg lg:text-2xl text-[#000229] mb-3">Manage your HiFL Account</h2>
        <div className="w-full lg:w-[80%]">
          <div className="border border-x-0 border-[#F4C316] pt-6 pb-12">
            <h2 className="text-xl lg:text-3xl text-[#000229] uppercase font-bold">Log In</h2>
            <form onSubmit={handleSubmit} className="mt-4 lg:mt-8">
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-between items-center">
                <div className="w-full relative">
                  <InputField
                    type="text"
                    name="email"
                    onChange={handleChange}
                    placeholder="Email Address"
                    data={data}
                    //required
                  />
                </div>
                <div className="w-full relative">
                  <InputField
                    type="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="Password"
                    data={data}
                    //required
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

              <div className="flex flex-col md:flex-row justify-between items-center mt-3">
                <button className={`${loading && "loading"} btn btn-wide btn-primary capitalize font-bold`}>
                  {loading ? "" : "Sign In"}
                </button>
                <Link href="#">
                  <a className="text-primary mt-4 md:mt-0 text-sm md:text-base">
                    Forgot your password? click here to reset
                  </a>
                </Link>
              </div>
            </form>
          </div>

          <div className="flex justify-center pt-6 md:pt-12 pb-2 md:pb-4">
            <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-12">
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
