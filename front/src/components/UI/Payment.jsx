import React from "react";
import masterCard from "../../assets/all-images/master-card.jpg";
import "../../styles/payment-method.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaymentMethod = () => {
  const handlePaymentSelection = (paymentMethod) => {
    toast.success(`Payment method selected: ${paymentMethod}`);
  };

  return (
    <>
      <div className="payment">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input
            type="radio"
            name="pay"
            onClick={() => handlePaymentSelection("Direct Bank Transfer")}
          />{" "}
          Direct Bank Transfer
        </label>
      </div>

      <div className="payment mt-3">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input
            type="radio"
            name="pay"
            onClick={() => handlePaymentSelection("Cheque Payment")}
          />{" "}
          Cheque Payment
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input
            type="radio"
            name="pay"
            onClick={() => handlePaymentSelection("Master Card")}
          />{" "}
          Master Card
        </label>

        <img src={masterCard} alt="" />
      </div>

      
    </>
  );
};

export default PaymentMethod;
