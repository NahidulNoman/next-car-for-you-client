import React, { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import MyOrderRow from "./MyOrderRow";
import { AuthContext } from "../../../UserContext/UserContext";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const MyOrders = () => {
  const {user} = useContext(AuthContext);
  const [checkout , setCheckout] = useState(null);
  
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings",user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
        headers : {
          authorization : `bearer ${localStorage.getItem('token')}`
        },
      }).then((res) => res.json()),
  });

  // console.log(checkout);
  return (
    <div className="overflow-x-auto w-full b">
      <h4 className="text-3xl font-semibold mb-8 mt-8">My Orders</h4>
      <table className="table w-full ">
        <thead>
          <tr>
            <th>
              <label></label>
            </th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {bookings?.map((book) => (
            <MyOrderRow key={book._id} book={book} 
            setCheckout={setCheckout}
            checkout={checkout}
            ></MyOrderRow>
          ))}
        </tbody>
      </table>
     {
      checkout &&  
    <Elements stripe={stripePromise}>
    <Payment 
      checkout={checkout}
    ></Payment>
  </Elements>
     }
    </div>
  );
};

export default MyOrders;
