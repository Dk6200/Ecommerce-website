import React from "react";
import IncreaseDecreaseQuantity from "./IncreaseDecreaseQuantity";
import { useDispatch } from "react-redux";
import { removeFromCart } from "./redux/Cart/cartAction";

const CartItemCard = ({ product, cartItems }) => {
  console.log("product*********", product);
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <div className="border p-4 mb-4">
      <div className="bg-gray-100 rounded-md p-4 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <img
            src={product.image}
            alt={product.title}
            className="w-16 h-16 rounded-md"
          />
          <div>
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <IncreaseDecreaseQuantity
              productData={product}
              cartItems={cartItems}
            />
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-lg font-semibold mr-4">
            ₹{product.quantity * product.price}
          </p>
          <button
            className="text-red-500 hover:text-red-700 focus:outline-none font-semibold"
            onClick={handleRemove}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
