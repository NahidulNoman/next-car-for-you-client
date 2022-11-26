import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const Payment = ({ checkout }) => {
  const { item, price } = checkout;
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
      console.log(error);
    } else {
      setCardError("");
    }
  };

  return (
    <>
      <input type="checkbox" id="payment" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="payment"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Payment For {item}</h3>
          <p className="py-4">
            <h3 className="font-semibold mb-3">Your Price : {price}$</h3>
            <form onSubmit={handleSubmit}>
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />
              <button
                className="btn btn-primary btn-sm mt-5 mr-3"
                type="submit"
                disabled={!stripe}
              >
                Pay
              </button>
              <span className="text-red-500">{cardError}</span>
            </form>
          </p>
        </div>
      </div>
    </>
  );
};

export default Payment;
