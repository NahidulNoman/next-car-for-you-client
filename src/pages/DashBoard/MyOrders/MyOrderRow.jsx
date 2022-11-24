import React from 'react';

const MyOrderRow = ({book}) => {
    const {img,item,price} = book;
    return (
        <tr>
            <th>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={img}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </div>
            </td>
            <td>
            {item}
            </td>
            <td>{price}$</td>
            <th>
              <button className="btn btn-primary btn-xs">Pay</button>
            </th>
          </tr>
    );
};

export default MyOrderRow;