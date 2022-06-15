import React from "react";

const Filter = ({ title, name, onChange }) => {

  return (
    <div className="p-4 border rounded-md bg-white flex flex-col">
      <label htmlFor="season" className="text-red-600 mb-5">
        {title}*
      </label>
      <select className="select w-full" name={name} onChange={onChange}>
        <option defaultValue="Select a season">Select a season</option>
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
