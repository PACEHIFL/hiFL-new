import React from "react";
import { BeatLoader } from "react-spinners";

const PageLoading = ({ loading }) => {
  return (
    <div className="h-[400px] flex justify-center items-center">
      <BeatLoader loading={loading} color="#000229" />
    </div>
  );
};

export default PageLoading;
