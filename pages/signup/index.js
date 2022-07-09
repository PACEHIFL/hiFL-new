import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import AuthLayout from "../../components/layout/AuthLayout";
import InputField from "../../components/authpages/InputField";
import useFetch from "../../hooks/useFetch";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/features/auth.slice";

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
    openStanbicAccount: "YES",
    contactViaEmail: true,
    contactViaCall: false,
    contactViaText: false,
    consent: false,
  };

  const [userData, setUserData] = useState(initialState);
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    confirmPassword,
    supportingInst,
    hearAbtUs,
    openStanbicAccount,
    contactViaEmail,
    contactViaCall,
    contactViaText,
    consent,
  } = userData;

  const baseURL = process.env.BASE_URL;
  const { data } = useFetch(`${baseURL}/institutions`);

  const router = useRouter();

  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const propsPayload = {
      Supportinginstitution: supportingInst,
      Hearaboutus: hearAbtUs,
      OpenStanbicAccount: openStanbicAccount,
      ContactOptions:
        openStanbicAccount == "YES"
          ? [
              ...(contactViaCall ? ["Phone Call"] : []),
              ...(contactViaEmail ? ["Email"] : []),
              ...(contactViaText ? ["Text"] : []),
            ]
          : null,
    };
    const payload = {
      Firstname: firstName,
      Lastname: lastName,
      Email: email,
      Phonenumber: +phoneNumber,
      Password: password,
      Role: "User",
      props: { ...propsPayload },
    };

    if (!consent) {
      toast.error("Please accept terms and conditions");
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    }
    if (firstName && lastName && email && password && phoneNumber && confirmPassword == password && consent) {
      dispatch(register({ payload, toast, router }));
    }
  };

  const handleChange = (e) => {
    const { type, name, value, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setUserData({ ...userData, [name]: val });
  };

  return (
    <AuthLayout>
      <div className="px-4 lg:px-8 text-[#000229] ">
        <h2 className="text-lg lg:text-2xl text-[#000229] mb-3">Create your free HiFL account</h2>
        <div className="w-full lg:w-[80%]">
          <div className="border border-x-0 border-[#F4C316] pt-6 pb-12">
            <h2 className="text-xl lg:text-3xl text-[#000229] uppercase font-bold">Sign Up</h2>
            <form onSubmit={handleSubmit} className="mt-4 lg:mt-8">
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-between items-center mb-10">
                <div className="w-full relative">
                  <InputField
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    placeholder="First Name"
                    data={userData}
                    required
                  />
                </div>
                <div className="w-full relative">
                  <InputField
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    placeholder="Last Name"
                    data={userData}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 md:gap-12  justify-between items-center mb-10">
                <div className="w-full relative">
                  <InputField
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Email Address"
                    data={userData}
                    required
                  />
                </div>
                <div className="w-full relative">
                  <InputField
                    type="tel"
                    name="phoneNumber"
                    onChange={handleChange}
                    placeholder="Phone Number"
                    data={userData}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 md:gap-12  justify-between items-center mb-10">
                <div className="w-full relative">
                  <InputField
                    type="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="Password"
                    data={userData}
                    required
                  />
                </div>
                <div className="w-full relative">
                  <InputField
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    data={userData}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 md:gap-12  justify-between items-center mb-5">
                <div className="w-full">
                  <select
                    name="supportingInst"
                    value={userData.supportingInst}
                    onChange={handleChange}
                    className="w-full border-b border-[#767670] py-2 px-4 outline-none bg-[#E8E8E8] focus:bg-[#FBFBFB] cursor-pointer">
                    <option value="">Which Institution are you supporting?</option>
                    {data?.data.map(({ InstitutionName }, i) => (
                      <option value={InstitutionName} key={i}>
                        {InstitutionName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full">
                  <select
                    value={userData.hearAbtUs}
                    name="hearAbtUs"
                    onChange={handleChange}
                    className="w-full border-b border-[#767670] py-2 px-4 outline-none bg-[#E8E8E8] focus:bg-[#FBFBFB] cursor-pointer">
                    <option value="">How did you hear about us?</option>
                    {heardAboutUs.map((medium, i) => (
                      <option value={medium} key={i}>
                        {medium}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex flex-col-reverse md:flex-row-reverse gap-2 md:gap-6  justify-between mb-3 text-sm">
                <p className="">
                  Would you like to open an Account with <span className="font-bold">Stanbic IBTC</span> - our official
                  financial partner to enjoy exciting benefits and offers. (This means we'll be sharing your contact
                  information with Stanbic IBTC)
                </p>
                <div className="">
                  <div className="flex gap-6">
                    <div className="flex gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="openStanbicAccount"
                        value="YES"
                        className="radio radio-xs radio-primary"
                        onChange={handleChange}
                        defaultChecked
                      />
                      <span className="font-semibold">Yes</span>
                    </div>
                    <div className="flex gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="openStanbicAccount"
                        value="NO"
                        className="radio radio-xs radio-primary"
                        onChange={handleChange}
                      />
                      <span className="font-semibold">No</span>
                    </div>
                  </div>
                </div>
              </div>
              {userData.openStanbicAccount == "YES" && (
                <div className="flex flex-col md:flex-row gap-2 md:gap-4  mb-8 text-sm">
                  <p className="">How would you like to be contacted ?</p>
                  <div className="">
                    <div className="flex flex-col gap-3">
                      <div className="flex gap-3 items-center">
                        <input
                          type="checkbox"
                          name="contactViaEmail"
                          checked={userData.contactViaEmail}
                          onChange={handleChange}
                          className="checkbox checkbox-xs checkbox-primary border-[#767670] outline-none rounded-sm"
                        />
                        <p>Email</p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <input
                          type="checkbox"
                          name="contactViaCall"
                          checked={userData.contactViaCall}
                          onChange={handleChange}
                          className="checkbox checkbox-xs checkbox-primary border-[#767670] outline-none rounded-sm"
                        />
                        <p>Phone Call</p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <input
                          type="checkbox"
                          name="contactViaText"
                          checked={userData.contactViaText}
                          onChange={handleChange}
                          className="checkbox checkbox-xs checkbox-primary border-[#767670] outline-none rounded-sm"
                        />
                        <p>Text</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-3 items-center mb-3">
                <input
                  type="checkbox"
                  name="consent"
                  checked={userData.consent}
                  onChange={handleChange}
                  className="checkbox checkbox-xs checkbox-primary border-[#767670] outline-none rounded-sm"
                />
                <p>
                  I have read, understand and agree to the{" "}
                  <a href="/terms-of-use" target="_blank" rel="noreferrer" className="text-primary">
                    terms and conditions
                  </a>{" "}
                  and{" "}
                  <a href="/terms-of-use" target="_blank" rel="noreferrer" className="text-primary">
                    privacy policy
                  </a>{" "}
                  of HiFL.
                </p>
              </div>

              <button className={`${loading && "loading"} btn btn-wide btn-primary capitalize font-bold mt-3`}>
                {loading ? "" : "Sign Up"}
              </button>
            </form>
          </div>

          <div className="flex justify-center pt-6 md:pt-12 pb-2 md:pb-4">
            <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-12">
              <h3 className="text-[#000229] text-lg">Already have an account?</h3>
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
