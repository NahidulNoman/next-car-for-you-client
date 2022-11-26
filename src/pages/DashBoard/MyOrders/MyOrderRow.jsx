import React from "react";

const MyOrderRow = ({ book, setCheckout }) => {
  const { image, item, price, email } = book;

  return (
    <>
      <tr>
        <th></th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>{item}</td>
        <td>{email}</td>
        <td>{price}$</td>
        <th>
          {book.price && !book.paid && (
            <label
              onClick={() => setCheckout(book)}
              htmlFor="payment"
              className="btn btn-primary btn-xs"
            >
              Pay
            </label>
          )}
          {book.price && book.paid && (
            <span className="text-green-500">Paid</span>
          )}
        </th>
      </tr>
    </>
  );
};

export default MyOrderRow;
