import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
} from "../Components/redux/Cart/cartAction";
import CartModal from "./CartModal";

const CartIcon = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const cartCount = cartItems.length;

  return (
    <div className="flex items-center bg-white p-2 shadow-md hover:shadow-lg rounded-md cursor-pointer">
      <button
        className="text-red text-xl focus:outline-none"
        onClick={() => setShowModal(!showModal)}
      >
        🛒
      </button>
      {cartCount > 0 && (
        <span
          className="cart-count bg-red text-white ml-1 rounded-full pl-2 pr-2"
          onClick={() => setShowModal(!showModal)}
        >
          {cartCount}
        </span>
      )}

      <CartModal
        showModal={showModal}
        isOpen={showModal}
        onClose={() => setShowModal(!showModal)}
        cartItems={cartItems}
      />
    </div>
  );
};

export default CartIcon;
