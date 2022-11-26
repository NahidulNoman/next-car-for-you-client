import React from "react";

const CategoryDetails = ({ catDetails,setModal }) => {
    const {image,location,sellerName,name,description,condition,purchase,original_price,mobile,posted_time,price,years_used,} = catDetails;
    console.log(catDetails);
  return (
    <div className="hero bg-white mt-10 rounded-md mb-10">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} className="lg:w-1/2 rounded-lg shadow-2xl" alt="" />
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold">{name}</h1>
          <p className="py-6">
            <p className="mb-3 font-semibold">{
              description ? description.slice(0,100)+'... see more': 'NO DESCRIPTION ADDED'
            }</p>
            <h2 className="text-md font-semibold">Seller Name : {sellerName}</h2>
            <h2 className="text-md font-semibold">Location : {location}</h2>
            <h2 className="text-md font-semibold">
              Sale Price : {price}$
            </h2>
            <h2 className="text-md font-semibold">
              Product Condition : {condition}
            </h2>
            <h2 className="text-md font-semibold">
              Original Price : {original_price}$
            </h2>
            <h2 className="text-md font-semibold">
              Mobile : {mobile}
            </h2>
            <h2 className="text-md font-semibold">Year Of Used : {years_used} years</h2>
            <h2 className="text-md font-semibold">Post Date : {posted_time}</h2>
            <h2 className="text-md font-semibold">Purchase Date : {purchase}</h2>
          </p>
          <label
          onClick={()=> setModal(catDetails)}
          htmlFor="category-modal" className="btn">
            Book Now
          </label>
        </div>
      </div>
     
    </div>
  );
};

export default CategoryDetails;
