import { useState, useEffect } from "react";
import FixturesCard from "../teams/FixturesCard";

const FixturesAccordion = ({ title, data }) => {
  return (
    <div className="mb-5">
      {/* <h1 className="text-[30px] font-bold">{title}</h1> */}
      <div>
        <details className="my-4 cursor-pointer">
          <summary className="text-lg font-bold bg-gray-200 py-5 pl-6 rounded-sm">{title} </summary>
          {data.length !== 0 ? data?.map((fixture, idx) => (
            <FixturesCard fixture={fixture} key={idx} />
          )): <p className="p-5 text-lg border"> There is no fixture yet. </p> }
        </details>
      </div>
    </div>
  );
};

export default FixturesAccordion;
