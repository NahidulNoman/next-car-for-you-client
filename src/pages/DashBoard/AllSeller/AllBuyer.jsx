import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllBuyer = () => {
//   const [buyers, setBuyers] = useState([]);
  
  const { data: allBuyers = [], refetch } = useQuery({
    queryKey: ["allBuyers"],
    queryFn: () =>
      fetch("https://hit-the-road-server.vercel.app/allBuyers").then((res) => res.json()),
  });
//   console.log(allBuyers);

  const handlerDelete = (id) => {
    fetch(`https://hit-the-road-server.vercel.app/deleteBuyer/${id}`, {
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
         <h3 className='text-3xl font-semibold mt-5 mb-5'>All Buyers</h3>
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
                allBuyers?.map((buyer,i) => <tr key={i}>
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

export default AllBuyer;
