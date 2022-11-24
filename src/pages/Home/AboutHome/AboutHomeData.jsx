import React from "react";

const AboutHomeData = ({ data }) => {
  return (
    <div className="card bg-white shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold">{data.name}</h2>
        <p className="font-semibold opacity-75">{data.describe}</p>
      </div>
    </div>
  );
};

export default AboutHomeData;
