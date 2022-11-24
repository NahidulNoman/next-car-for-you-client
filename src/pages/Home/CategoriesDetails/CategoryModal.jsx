import React, { useContext } from "react";
import { AuthContext } from "../../../UserContext/UserContext";

const CategoryModal = ({catDetails}) => {
  const { user } = useContext(AuthContext);
  const {name,resale_price} = catDetails;
  console.log(catDetails)
  const handlerBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const phone = form.phone.value;
    const email = form.email.value;
    const item = form.item.value;
    const price = form.price.value;
    const name = form.name.value;
    const location = form.location.value;

    console.log(phone,email,item,price,name,location)
    const booking = {
        phone,
        email,
    };
    
  };
  
  return (
    <>
      <input type="checkbox" id="category-modal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <form onSubmit={handlerBooking} className="py-4">
            <input
              type="text"
              name="item"
              defaultValue={name}
              placeholder="item name"
              className="input input-bordered input-accent w-full mb-3"
            />{" "}
            <br />
            <input
              type="text"
              name="price"
              defaultValue={resale_price}
              placeholder="price"
              className="input input-bordered input-accent w-full mb-3"
            />{" "}
            <br />
            <input
              type="text"
              name="name"
              disabled
              defaultValue={user?.displayName}
              placeholder="your name"
              className="input input-bordered input-accent w-full mb-3"
            />{" "}
            <br />
            <input
              type="email"
              name="email"
              disabled
              defaultValue={user?.email}
              placeholder="email address"
              className="input input-bordered input-accent w-full mb-3"
            />{" "}
            <br />
            <input
              type="phone"
              name="phone"
              placeholder="phone number"
              className="input input-bordered input-accent w-full mb-3"
            />{" "}
            <br />
            <input
              type="location"
              name="location"
              placeholder="Meeting Location"
              className="input input-bordered input-accent w-full mb-3"
            />{" "}
            <br />
            <input
            
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
            <label  htmlFor="category-modal" className="btn">
              Booked
            </label>
          {/* <div className="modal-action">
            
          </div> */}
        </div>
      </div>
    </>
  );
};

export default CategoryModal;
