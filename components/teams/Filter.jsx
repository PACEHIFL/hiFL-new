import React from "react";

const Filter = ({ title, name, onChange }) => {

  return (
    <div className="p-2 border rounded-md bg-white flex flex-col">
      <select className="select w-full border-none" name={name} onChange={onChange}>
        <option defaultValue={title} className="text-red-600">{title}</option>
        <option>2022</option>
        <option>2021</option>
        <option>2020</option>
        <option>2019</option>
        <option>2018</option>
      </select>
    </div>
  );
};

export default Filter;
