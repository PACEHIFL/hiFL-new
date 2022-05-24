import React from "react";

const InputField = ({ type, name, onChange, placeholder, data, required }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        value={data[name]}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={(e) => (e.target.placeholder = " ")}
        onBlur={(e) => (e.target.placeholder = placeholder)}
        required={required ? true : false}
        className="w-full border-b border-[#767670] py-2 px-4 outline-none bg-[#E8E8E8] focus:bg-[#FBFBFB]"
      />
    </>
  );
};

export default InputField;
