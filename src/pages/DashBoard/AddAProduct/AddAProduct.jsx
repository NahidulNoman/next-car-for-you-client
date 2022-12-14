import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../UserContext/UserContext";

const AddAProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlerAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const sellerName = user?.displayName;
    const price = form.price.value;
    const mobile = form.mobile.value;
    const condition = form.condition.value;
    const category_id = form.category.value;
    const location = form.location.value;
    const image = form.image.value;
    const purchase = form.purchase.value;
    const description = form.description.value;

    const productDetails = {
      name,
      price,
      mobile,
      condition,
      email,
      sellerName,
      image,
      category_id,
      location,
      purchase,
      description,
    };

    // console.log(productDetails);

    fetch("https://hit-the-road-server.vercel.app/addProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("your product successfully added!!");
          navigate("/dashboard/myProduct");
        }
      });

    // console.log(productDetails);
  };

  return (
    <div className="bg-white mt-10 p-5 shadow-lg rounded-md">
      <h3 className="text-3xl pl-8 font-bold">Add Product</h3>
      <form onSubmit={handlerAddProduct} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Product Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Price</span>
          </label>
          <input
            type="text"
            name="price"
            placeholder="Price"
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Mobile Number</span>
          </label>
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            className="input input-bordered"
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Product Condition</span>
          </label>
          <select name="condition" className="select input-bordered">
            <option>Excellent</option>
            <option>Good</option>
            <option>Fair</option>
          </select>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Product Category</span>
          </label>
          <select name="category" className="select input-bordered">
            <option>Audi</option>
            <option>Ferrari</option>
            <option>Mercedes</option>
          </select>
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-semibold">Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="input input-bordered"
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-semibold">Year of Purchase</span>
          </label>
          <input
            type="text"
            name="purchase"
            placeholder="Year of purchase"
            className="input input-bordered"
          />
        </div>

        {/* <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-semibold">Image</span>
          </label>
          <input
            type="file"
            name="image"
            placeholder="Location"
            className="file-input file-input-bordered"
          />
        </div> */}

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-semibold">Image url</span>
          </label>
          <input
            type="text"
            name="image"
            placeholder="Image url"
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Description..."
            name="description"
          ></textarea>
        </div>

        <input
          className="btn btn-accent w-full"
          value="Add Product"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddAProduct;
