import React from "react";
import { Link } from "react-router-dom";
// import audi from "../../../assets/audi.jpg";
// import mar from "../../../assets/mar.jpg";
// import ferrari from "../../../assets/ferrari.jpg";

const HomeCategory = ({ category }) => {
  const { category_name, image } = category;
  return (
    // <div className="card bg-white shadow-xl">
    //   <div className="card-body">
    //     <h2 className="card-title">Brand : {category_name}</h2>
        // <div className="card-actions justify-end">
        //   <Link to={`/categories/${category_name}`}><button className="btn btn-primary">Details Category</button></Link>
        // </div>
    //   </div>
    // </div>
    <div className="card bg-base-100 shadow-xl image-full">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{category_name}</h2>

        <div className="card-actions justify-end mt-32">
          <Link to={`/categories/${category_name}`}><button className="btn btn-primary text-slate-700">Details Category</button></Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
