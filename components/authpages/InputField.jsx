import React, { useState } from "react";

const InputField = ({ type, name, onChange, placeholder, data, required }) => {
  const [inFocus, setInFocus] = useState(false);

  //when focused, display label on top field
  const handleFocus = (e) => {
    e.target.placeholder = "";
    setInFocus(true);
  };
  //when out of focus, revert back to default
  const handleBlur = (e) => {
    e.target.placeholder = placeholder;
    setInFocus(false);
  };
  return (
    <>
      <label htmlFor={name} className={`${inFocus ? "block" : "hidden"} absolute -top-6`}>
        {placeholder}
      </label>
      <input
        type={type}
        name={name}
        value={data[name]}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        required={required ? true : false}
        className="w-full border-b border-[#767670] py-2 px-4 outline-none bg-[#E8E8E8] focus:bg-[#FBFBFB]"
      />
    </>
  );
};

export default InputField;
