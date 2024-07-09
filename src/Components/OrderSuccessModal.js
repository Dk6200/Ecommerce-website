import React from "react";
import { Link } from "react-router-dom";

const OrderSuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md text-center">
        <h2 className="text-2xl font-bold text-red mb-4">
          Your order has been successfully placed!
        </h2>
        <p className="text-gray-700">
          Thank you for shopping with us. Your order details will be sent to
          your email.
        </p>
        <Link to="/">
          <button
            onClick={onClose}
            className="mt-6 bg-red text-white px-4 py-2 rounded-md font-semibold"
          >
            Close
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccessModal;
