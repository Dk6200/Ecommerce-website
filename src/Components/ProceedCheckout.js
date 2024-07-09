import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderSuccessModal from "./OrderSuccessModal";
import PaymentOptions from "./PaymentOptions";
import { clearCart } from "./redux/Cart/cartAction";

const ProceedCheckout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const [paymentInfo, setPaymentInfo] = useState();

  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [agreeToTermsError, setAgreeToTermsError] = useState("");

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const totalPrice = cartItems.reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0
  );

  const handlePaymentInfoChange = (e) => {
    setPaymentInfo({
      ...paymentInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleAgreeToTermsChange = () => {
    setAgreeToTerms(!agreeToTerms);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (agreeToTerms) {
      setAgreeToTermsError("");
      setShowSuccessModal(true);
    } else {
      setAgreeToTermsError("Please agree to the Terms and Conditions");
    }
  };

  if (cartItems.length === 0) {
    return <div>No items in cart.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6">Proceed to Checkout</h2>
      <form>
        {/* Order Summary */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="border-b-2 border-gray-300 py-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      className="w-12 h-12 object-contain rounded"
                      src={item.image}
                      alt={item.title}
                    />
                    <span className="ml-4 text-sm">{item.title}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <span className="font-semibold">X {item.quantity}</span>
                    </div>
                    <div className="text-red-500 font-semibold">
                      ₹{item.price * item.quantity}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Total Price */}
        <div className="mb-12 float-end">
          <h3 className="text-lg font-semibold mb-2">Total Price</h3>
          <span>{`₹${totalPrice.toFixed(2)}`}</span>
        </div>

        {/* Payment Options */}
        <PaymentOptions
          paymentInfo={paymentInfo}
          handlePaymentInfoChange={handlePaymentInfoChange}
        />

        {/* Terms and Conditions */}
        <div className="mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={handleAgreeToTermsChange}
              className="mr-2"
            />
            <span className="text-sm text-gray-700">
              I agree to the{" "}
              <a href="/terms" className="text-blue-500">
                Terms and Conditions
              </a>
            </span>
          </label>
          {agreeToTermsError && (
            <div className="text-red text-sm">{agreeToTermsError}</div>
          )}
        </div>

        {/* Place Order Button */}
        <button
          type="button"
          className="bg-red text-white p-3 rounded-md"
          onClick={handleSubmit}
          // disabled={!agreeToTerms}
        >
          Place order
        </button>
      </form>
      <OrderSuccessModal
        isOpen={showSuccessModal}
        onClose={() => {
          setShowSuccessModal(false);
          dispatch(clearCart());
        }}
      />
    </div>
  );
};

export default ProceedCheckout;
