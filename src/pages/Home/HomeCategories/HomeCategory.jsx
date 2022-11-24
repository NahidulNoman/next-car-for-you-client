import React from "react";

const HomeCategory = ({ category }) => {
  const { category_name, category_id } = category;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Brand : {category_name}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Details Category</button>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
