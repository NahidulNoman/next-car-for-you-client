import React from "react";
import { Link } from "react-router-dom";
// import audi from "../../../assets/audi.jpg";
// import mar from "../../../assets/mar.jpg";
// import ferrari from "../../../assets/ferrari.jpg";

const HomeCategory = ({ category }) => {
  const { category_name } = category;
  return (
    <div className="card bg-white shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Brand : {category_name}</h2>
        <div className="card-actions justify-end">
          <Link to={`/categories/${category_name}`}><button className="btn btn-primary">Details Category</button></Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
