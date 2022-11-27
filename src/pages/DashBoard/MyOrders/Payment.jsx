import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Payment = ({ checkout,refetch,setCheckout }) => {
  const { item, price,email,_id } = checkout;
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  // const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    // setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
      console.log(error);
    } else {
      setCardError("");
    };

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: "",
            email: "",
          },
        },
      });
      if (confirmError) {
        setCardError(error.message);
        return;
      };
      // console.log(paymentIntent)
      if (paymentIntent.status === "succeeded") {
        const payment = {
          price,
          transactionId: paymentIntent.id,
          email,
          bookingId: _id
        };
        fetch('http://localhost:5000/payment', {
          method : 'POST',
          headers : {
              'content-type':'application/json'
          },
          body : JSON.stringify(payment)
        })
        .then(res => res.json())
        .then(data => {
          if (data.acknowledged) {
            // console.log(data);
            toast.success('Congrats! your payment completed');
            setCheckout(null);
            refetch();
              // setSuccess('Congrats! your payment completed');
              // setTransactionId(paymentIntent.id);
          };
        })
      }
      
      // setProcessing(false);
      // console.log(paymentIntent);
  };

  return (
    <>
      <input type="checkbox" id="payment" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-white">
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
                disabled={!stripe || !clientSecret }
              >
                Pay
              </button>
              {
                cardError && <span className="text-red-500">{cardError}</span>
              }
            </form>
          </p>
        </div>
      </div>
    </>
  );
};

export default Payment;
