import React, { useState } from "react";

const InputField = ({ type, name, onChange, placeholder, data, required, disabled }) => {
  return (
    <>
      <label htmlFor={name} className="font-bold text-sm">
        {placeholder}
      </label>
      <input
        type={type}
        name={name}
        value={data[name]}
        onChange={onChange}
        placeholder={placeholder}
        required={required ? true : false}
        disabled={disabled ? true : false}
        className={`w-full border text-sm ${
          disabled ? "bg-[#EFEFEF]" : "bg-white"
        }border-[#F4F4F4] mt-1 py-3 px-4 outline-none rounded`}
      />
    </>
  );
};

export default InputField;
