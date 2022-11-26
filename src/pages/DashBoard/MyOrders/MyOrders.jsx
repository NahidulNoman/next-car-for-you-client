import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import MyOrderRow from "./MyOrderRow";
import { AuthContext } from "../../../UserContext/UserContext";

const MyOrders = () => {
  const {user} = useContext(AuthContext);
  
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings",user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
        headers : {
          authorization : `bearer ${localStorage.getItem('token')}`
        },
      }).then((res) => res.json()),
  });

  console.log(bookings);
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
            <MyOrderRow key={book._id} book={book}></MyOrderRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
