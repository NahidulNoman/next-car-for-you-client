import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../UserContext/UserContext";
import MyProductRow from "./MyProductRow";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const { data: myProduct , refetch } = useQuery({
    queryKey: ["myProduct", user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/myProduct?email=${user?.email}`,{
        headers : {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      }).then(
        (res) => res.json()
      ),
  });
  
//   console.log(myProduct);

  return (
    <div className="overflow-x-auto mt-6">
      <h4 className="text-3xl font-semibold mb-6">My Products</h4>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Product Name</th>
            <th>Seller Name</th>
            <th>Price</th>
            <th>Available </th>
            <th>Advertised</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {myProduct?.map((product, i) => (
            <MyProductRow
              key={product._id}
              i={i}
              refetch={refetch}
              product={product}
            ></MyProductRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProducts;
