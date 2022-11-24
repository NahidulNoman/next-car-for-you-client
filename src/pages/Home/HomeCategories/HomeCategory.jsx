import React from "react";
import { Link } from "react-router-dom";

const HomeCategory = ({ category }) => {
  const { category_name, category_id } = category;
  return (
    <div className="card bg-white shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Brand : {category_name}</h2>
        <div className="card-actions justify-end">
          <Link to={`/categories/${category_id}`}><button className="btn btn-primary">Details Category</button></Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
