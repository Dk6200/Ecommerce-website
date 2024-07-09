import React, { useEffect, useState } from "react";
import { removeFromCart, updateQuantity } from "./redux/Cart/cartAction";
import { useDispatch, useSelector } from "react-redux";

const IncreaseDecreaseQuantity = ({ productData, cartItems }) => {
  console.log("safdddddddddddddd", productData);
  const dispatch = useDispatch();
  const [itemQuantity, setItemQuantity] = useState(
    productData?.quantity ? productData.quantity : 0
  );

  //   const cartItems = useSelector((state) => state.cart.items);
  console.log("itemeeeeeeeeee", itemQuantity);
  useEffect(() => {
    const cartItemQuantity = cartItems.find(
      (item) => item.id === parseInt(productData.id, 10)
    );
    console.log(
      "cartItemQuantitycartItemQuantitycartItemQuantitycartItemQuantity",
      cartItemQuantity
    );

    setItemQuantity(cartItemQuantity.quantity);
  }, [productData]);

  const handleIncreaseQuantity = () => {
    const item = cartItems.find((item) => item.id === productData.id);
    dispatch(updateQuantity(productData.id, item.quantity + 1));
    setItemQuantity(item?.quantity ?? 0 + 1);
  };

  const handleDecreaseQuantity = () => {
    const currentItem = cartItems.find((item) => item.id === productData.id);
    const newQuantity = Math.max(0, currentItem.quantity - 1);
    setItemQuantity(newQuantity);
    dispatch(updateQuantity(productData.id, newQuantity));
  };
  return (
    <div>
      {itemQuantity > 0 && (
        <div className="font-bold">
          <button
            className="m-3 bg-red w-6 text-white rounded-md"
            onClick={handleDecreaseQuantity}
          >
            -
          </button>
          {itemQuantity}
          <button
            className="m-3 w-6 text-white bg-red rounded-md"
            onClick={handleIncreaseQuantity}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default IncreaseDecreaseQuantity;
