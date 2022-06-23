import React from "react";

const Filter = ({ seasons, onChange }) => {
  return (
    <select className="select w-full border-gray-500" name="CurrentSeason" onChange={onChange}>
      {seasons &&
        seasons?.map((season, idx) => (
          <option value={season?._id} className="text-red-600" key={idx}>
            {season?.SeasonYear}
          </option>
        ))}
    </select>
  );
};

export default Filter;
