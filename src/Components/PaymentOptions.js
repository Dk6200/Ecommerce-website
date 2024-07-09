import React from "react";

const PaymentOptions = () => {
  return (
    <div className="max-w-2xl mx-auto mt-16 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6">Payment Options</h2>
      <div className="flex flex-col space-y-4">
        {/* Cash on Delivery (COD) Option */}
        <div className="flex items-center justify-between p-4 border rounded-md">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="radio" name="paymentOption" value="cod" />
            <span className="font-semibold">Cash on Delivery (COD)</span>
          </label>
          <span className="text-gray-500">Free</span>
        </div>

        {/* Other Payment Options (Coming Soon) */}
        <div className="p-4 border rounded-md text-gray-500">
          <label className="flex items-center space-x-2 cursor-not-allowed">
            <input
              type="radio"
              name="paymentOption"
              value="comingSoon"
              disabled
            />
            <span className="font-semibold">UPI (Coming Soon)</span>
          </label>
          <span>Coming Soon</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
