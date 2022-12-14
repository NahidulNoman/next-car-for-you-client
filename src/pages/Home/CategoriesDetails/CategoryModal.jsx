import React, { useContext } from "react";
import { AuthContext } from "../../../UserContext/UserContext";
import toast from "react-hot-toast";

const CategoryModal = ({ modal, setModal }) => {
  const { user } = useContext(AuthContext);
  const { name, price, image } = modal;

  // console.log(modal);

  const handlerBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const phone = form.phone.value;
    const email = form.email.value;
    const item = form.item.value;
    const price = form.price.value;
    const name = form.name.value;
    const location = form.location.value;

    const booking = {
      phone,
      email,
      item,
      price,
      name,
      location,
      image,
    };
    fetch("https://hit-the-road-server.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully booked!");
          setModal(null);
        }
      });
    // console.log(booking)
  };
  // category-modal
  return (
    <>
      <input type="checkbox" id="category-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-white">
          <label
            htmlFor="category-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Book for - {name}</h3>
          <form onSubmit={handlerBooking} className="py-4">
            <input
              type="text"
              name="item"
              defaultValue={name}
              disabled
              className="input input-bordered input-accent font-semibold w-full mb-3"
            />{" "}
            <br />
            <input
              type="text"
              name="price"
              defaultValue={price}
              disabled
              className="input input-bordered input-accent font-semibold w-full mb-3"
            />{" "}
            <br />
            <input
              type="text"
              name="name"
              disabled
              defaultValue={user?.displayName}
              className="input input-bordered font-semibold input-accent w-full mb-3"
            />{" "}
            <br />
            <input
              type="email"
              name="email"
              disabled
              defaultValue={user?.email}
              className="input input-bordered font-semibold input-accent w-full mb-3"
            />{" "}
            <br />
            <input
              type="phone"
              name="phone"
              placeholder="phone number"
              className="input input-bordered font-semibold input-accent w-full mb-3"
            />{" "}
            <br />
            <input
              type="location"
              name="location"
              placeholder="Meeting Location"
              className="input input-bordered font-semibold input-accent w-full mb-3"
            />{" "}
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default CategoryModal;
