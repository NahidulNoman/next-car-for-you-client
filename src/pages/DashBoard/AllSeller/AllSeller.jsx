import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllSeller = () => {
//   const [buyers, setBuyers] = useState([]);
  
  const { data: allSellers = [], refetch } = useQuery({
    queryKey: ["allSellers"],
    queryFn: () =>
      fetch("https://hit-the-road-server.vercel.app/allSellers").then((res) => res.json()),
  });
  console.log(allSellers);

  const handlerDelete = (id) => {
    fetch(`https://hit-the-road-server.vercel.app/deleteSeller/${id}`, {
        method : 'delete'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.deletedCount > 0){
            toast.success('Buyer delete successfully');
            refetch();
        }
    })
  }
 
  return (
      <div className="overflow-x-auto">
         <h3 className='text-3xl font-semibold mt-5 mb-5'>All Sellers</h3>
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
                allSellers?.map((buyer,i) => <tr key={i}>
                    <th>{i+1}</th>
                    <td>{buyer.name}</td>
                    <td>{buyer.email}</td>
                    <td>{buyer.role}</td>
                    <td><button 
                    onClick={()=> handlerDelete(buyer._id)}
                    className="btn btn-accent btn-sm">delete</button></td>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
  );
};

export default AllSeller;
