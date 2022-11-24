import React from "react";

const AddAProduct = () => {
  const handlerAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    const price = form.price.value;
    const mobile = form.mobile.value;
    const select = form.select.value;
    const location = form.location.value;
    const purchase = form.purchase.value;
    const description = form.description.value;

    console.log(productName, price, select, mobile, location,description,purchase);
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
            name="productName"
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
          <select name="select" className="select input-bordered">
            <option>Excellent</option>
            <option>Good</option>
            <option>Fair</option>
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
