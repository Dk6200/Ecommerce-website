import React from "react";
import { Link } from "react-router-dom";
import CartItemCard from "./CartItemCard";

const CartModal = ({ isOpen, onClose, cartItems = [] }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 right-0 w-full h-full bg-gray-700 bg-opacity-75 flex items-center justify-end">
      <div className="bg-white px-4 rounded-md h-full overflow-y-auto">
        <div className="flex p-4 justify-between items-center">
          <h2 className="text-lg font-bold text-red text-center p-2">
            Cart Items
          </h2>
          <button
            onClick={onClose}
            className="bg-red text-white px-4 py-2 rounded-md font-semibold"
          >
            Close
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-gray-500 text-lg mb-4">Your cart is empty.</p>
          </div>
        ) : (
          <>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="text-black">
                  <CartItemCard product={item} cartItems={cartItems} />
                </li>
              ))}
            </ul>
            <div className=" bg-white py-2 flex justify-end">
              <Link to={"/proceedCheckout"}>
                <button
                  onClick={onClose}
                  className="mt-4 bg-red text-white px-4 py-2 mr-1 rounded-md ml-2 font-semibold"
                >
                  Checkout
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
