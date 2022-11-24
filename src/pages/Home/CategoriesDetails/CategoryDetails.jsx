import React, { useState } from "react";
import CategoryModal from "./CategoryModal";

const CategoryDetails = ({ catDetails }) => {
  // const [modal , setModal] = useState(null);
    const {img,location,name,original_price,posted_time,resale_price,years_used,} = catDetails;
  return (
    <div className="hero bg-white mt-10 rounded-md mb-10">
      <div className="hero-content flex-col lg:flex-row">
        <img src={img} className="lg:w-1/2 rounded-lg shadow-2xl" alt="" />
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold">{name}</h1>
          <p className="py-6">
            <h2 className="text-md font-semibold">Location : {location}</h2>
            <h2 className="text-md font-semibold">
              Sale Price : {resale_price}$
            </h2>
            <h2 className="text-md font-semibold">
              Original Price : {original_price}$
            </h2>
            <h2 className="text-md font-semibold">Total Used : {years_used}</h2>
            <h2 className="text-md font-semibold">Post Time : {posted_time}</h2>
          </p>
          <label htmlFor="category-modal" className="btn">
            open modal
          </label>
        </div>
      </div>
      <CategoryModal catDetails={catDetails}></CategoryModal>
    </div>
  );
};

export default CategoryDetails;
