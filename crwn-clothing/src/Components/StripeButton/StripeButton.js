import React from "react";
import { stripeKey } from "../../secrets/secrets";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; //convert Dollar to Cent
  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothinng Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      stripeKey={stripeKey}
      token={onToken}
    />
  );
};

export default StripeCheckoutButton;
