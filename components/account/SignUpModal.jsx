import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import InputField from "./InputField";

const SignUpModal = () => {
  const initialState = {
    University: "",
    department: "",
    Program: "",
    matricNo: "",
    level: "",
    expectedYearOfGrad: "",
    nextOfKinName: "",
    nextOfKinPhone: "",
    whyJoinVolunteer: "",
  };
  const [userData, setUserData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const baseURL = process.env.BASE_URL;
  const { data } = useFetch(`${baseURL}/institutions`);

  const handleChange = (e) => {
    const { type, name, value, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setUserData({ ...userData, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };
  return (
    <form className="p-8" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-between items-center mb-4">
        <div className="w-full">
          <label htmlFor="University" className="font-bold text-sm">
            University
          </label>
          <select
            name="University"
            value={userData.University}
            onChange={handleChange}
            required
            className={`w-full border text-sm border-[#F4F4F4] mt-1 py-3 px-4 outline-none rounded`}>
            <option value="">Select University</option>
            {data?.data.map(({ InstitutionName }, i) => (
              <option value={InstitutionName} key={i}>
                {InstitutionName}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full">
          <InputField
            type="text"
            name="department"
            onChange={handleChange}
            placeholder="Department"
            data={userData}
            required
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-between items-center mb-4">
        <div className="w-full">
          <label htmlFor="Program" className="font-bold text-sm">
            Program
          </label>
          <select
            name="Program"
            value={userData.Program}
            onChange={handleChange}
            required
            className={`w-full border text-sm border-[#F4F4F4] mt-1 py-3 px-4 outline-none rounded`}>
            <option value="" disabled>
              Select Program
            </option>
            <option value="undergraduate">Undergraduate</option>
            <option value="postgraduate">Postgraduate</option>
          </select>
        </div>
        <div className="w-full">
          <InputField
            type="text"
            name="matricNo"
            onChange={handleChange}
            placeholder="Matric No"
            data={userData}
            required
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-between items-center">
        <div className="w-full">
          <label htmlFor="Program" className="font-bold text-sm">
            Level
          </label>
          <select
            name="level"
            value={userData.level}
            onChange={handleChange}
            required
            className={`w-full border text-sm border-[#F4F4F4] mt-1 py-3 px-4 outline-none rounded`}>
            <option value="" disabled>
              Select Level
            </option>
            <option value="100">100 Level</option>
            <option value="200">200 Level</option>
            <option value="300">300 Level</option>
            <option value="400">400 Level</option>
            <option value="500">500 Level</option>
            <option value="Msc">Msc</option>
            <option value="PhD">PhD</option>
          </select>
        </div>
        <div className="w-full">
          <InputField
            type="text"
            name="expectedYearOfGrad"
            onChange={handleChange}
            required
            placeholder="Expected Year of Graduation"
            data={userData}
          />
        </div>
      </div>

      <h2 className="text-secondary text-xl font-bold my-8">Next of Kin Information</h2>

      <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-between items-center mb-4">
        <div className="w-full">
          <InputField
            type="text"
            name="nextOfKinName"
            onChange={handleChange}
            required
            placeholder="Full Name"
            data={userData}
          />
        </div>
        <div className="w-full">
          <InputField
            type="tel"
            name="nextOfKinPhone"
            onChange={handleChange}
            required
            placeholder="Phone Number"
            data={userData}
          />
        </div>
      </div>

      <div className="w-full">
        <label htmlFor="Heardaboutus" className="font-bold text-sm">
          Why do you want to volunteer?
        </label>
        <textarea
          name="whyJoinVolunteer"
          onChange={handleChange}
          placeholder="Please type your message"
          className="w-full border text-sm mt-1 py-3 px-4 outline-none rounded"
          data={userData}
          rows={4}
          required
        />
      </div>
      <button className={`${loading && "loading"} btn btn-wide btn-secondary text-white capitalize font-bold mt-6`}>
        {loading ? "" : "Apply"}
      </button>
    </form>
  );
};

export default SignUpModal;
