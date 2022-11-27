import React from "react";

const Advertised = ({ ad }) => {
  const {image,sellerName,condition,description,name,mobile} = ad;
  // console.log(ad);
  return (
    <div className="card bg-white shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">{condition}</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{sellerName}</div>
          <div className="badge badge-outline">{mobile}</div>
        </div>
      </div>
    </div>
  );
};

export default Advertised;
