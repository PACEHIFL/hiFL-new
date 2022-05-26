import React from "react";

const PageTitle = ({ name }) => {
  return (
    <div className="bg-[url('/title-bg.png')] bg-top h-[125px] flex items-center">
      <h2 className="text-white text-5xl px-20 font-bold capitalize">{name}</h2>
    </div>
  );
};

export default PageTitle;
