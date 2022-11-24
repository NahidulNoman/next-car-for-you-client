import React from "react";
import { useQuery } from '@tanstack/react-query'
import MyOrderRow from "./MyOrderRow";

const MyOrders = () => {
  
  const {data :bookings = [],} = useQuery({
    queryKey : ['bookings'],
    queryFn : ()=>fetch('http://localhost:5000/bookings')
    .then(res => res.json())
  })
    
  // console.log(bookings);
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
              </label>
            </th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            bookings.map(book => <MyOrderRow
              key={book}
              book={book}
            ></MyOrderRow>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
