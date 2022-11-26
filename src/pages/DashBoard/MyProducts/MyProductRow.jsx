import React from "react";
import toast from "react-hot-toast";

const MyProductRow = ({ product, i,refetch }) => {
  const { name, sellerName, price,_id } = product;
    // console.log(product)
    const handlerDelete = (id) => {
        // console.log(id)
        fetch(`http://localhost:5000/myProduct/${id}`, {
            method : 'delete'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                toast.success('your product deleted!!')
                refetch();
            }

        })
    };

  return (
    <tr>
      <th>{i + 1}</th>
      <td>{name}</td>
      <td>{sellerName}</td>
      <td>{price}</td>
      <td><button className="btn btn-accent btn-xs">Available</button></td>
      <td><button className="btn btn-primary btn-xs">Advertised</button></td>
      <td><button
        onClick={()=>handlerDelete(_id)}
      className="btn bg-red-500 btn-xs">Delete</button></td>
    </tr>
  );
};

export default MyProductRow;
