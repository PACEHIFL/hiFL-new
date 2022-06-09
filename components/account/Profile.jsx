import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn, update } from "../../redux/features/auth.slice";
import { states, countries } from "../../helpers/data";
import AccountLayout from "../layout/AccountLayout";
import InputField from "./InputField";

const Profile = () => {
  const initialState = {
    _id: null,
    Firstname: "",
    Lastname: "",
    Email: "",
    Phonenumber: "",
    Institution: "",
    props: {
      Gender: "",
      Birthday: "",
      Address: "",
      State: "",
      Country: "",
    },
  };
  const [data, setData] = useState(initialState);
  const [propsData, setPropsData] = useState({ Gender: "", Birthday: "", Address: "", State: "", Country: "" });
  const { Firstname, Lastname, Email, Phonenumber, Institution, _id } = data;

  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { type, name, value, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setData({ ...data, [name]: val });
  };
  const handlePropsChange = (e) => {
    const { name, value } = e.target;
    setPropsData({ ...propsData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      _id,
      params: { Firstname, Lastname, Phonenumber: +Phonenumber, Institution, props: { ...propsData } },
    };
    dispatch(update({ payload, toast }));
  };

  useEffect(() => {
    if (isLoggedIn()) {
      setData({ ...data, ...isLoggedIn().data.User });
      setPropsData({ ...propsData, ...isLoggedIn().data.User.props });
    }
  }, []);

  return (
    <AccountLayout name="profile">
      <div className="p-5 md:p-8">
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
                value={propsData.Gender}
                onChange={handlePropsChange}
                className={`w-full border text-sm border-[#F4F4F4] mt-1 py-3 px-4 outline-none rounded`}>
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-between items-center mb-4">
            <div className="w-full">
              <InputField
                type="date"
                name="Birthday"
                onChange={handlePropsChange}
                placeholder="Birthday"
                data={propsData}
                //required
              />
            </div>
            <div className="w-full">
              <InputField
                type="text"
                name="Address"
                onChange={handlePropsChange}
                placeholder="Address"
                data={propsData}
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
                value={propsData.State}
                onChange={handlePropsChange}
                className={`w-full border text-sm border-[#F4F4F4] mt-1 py-3 px-4 outline-none rounded`}>
                <option value="" disabled>
                  Select State
                </option>
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
                value={propsData.Country}
                onChange={handlePropsChange}
                className={`w-full border text-sm border-[#F4F4F4] mt-1 py-3 px-4 outline-none rounded`}>
                <option value="" disabled>
                  Select Country
                </option>
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

export default Profile;
