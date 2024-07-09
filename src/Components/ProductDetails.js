import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../Data/data";
// import BackButton from "./BackButton";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
} from "./redux/Cart/cartAction";
import IncreaseDecreaseQuantity from "./IncreaseDecreaseQuantity";

const ProductDetails = (props) => {
  const [productData, setProduct] = useState(null);
  const [productInCart, setProductInCart] = useState(null);
  const cartItems = useSelector((state) => state.cart.items);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const product = Data.find((item) => item.id === parseInt(id, 10));
    setProduct(product);
    const cartItem = cartItems.find((item) => item.id === parseInt(id, 10));
    setProductInCart(cartItem);
  }, [id, cartItems]);

  const handleAddToCart = () => {
    dispatch(addToCart(productData));
  };

  return (
    <>
      {/* <BackButton /> */}
      <div className="max-w-full h-auto bg-white shadow-md overflow-hidden rounded-md mb-4 mt-8 p-10 flex flex-col md:flex-row">
        <div className="md:w-1/2 p-4">
          <img
            src={productData?.image}
            alt={productData?.title}
            className="w-full h-[400px] object-contain object-center rounded-md"
          />
        </div>
        <div className="md:w-1/2 p-4 flex flex-col justify-between">
          <div>
            <div className="font-bold text-2xl mb-2">{productData?.title}</div>
            <div className="text-red mb-2 font-bold">₹{productData?.price}</div>
            <div className="text-gray-500 mb-4 font-semibold">
              {productData?.description}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-red mr-2 font-semibold">
                Rating: {productData?.rating.rate}
                <span
                  role="img"
                  aria-label="star"
                  className="text-yellow-500 pl-1"
                >
                  ⭐
                </span>
              </span>
              <span className="font-semibold">
                ({productData?.rating.count} ratings)
              </span>
            </div>
            <div className="flex items-center space-x-4">
              {productInCart && (
                <IncreaseDecreaseQuantity
                  productData={productInCart}
                  cartItems={cartItems}
                />
              )}
              <button
                className="bg-red text-white font-semibold px-4 py-2 rounded"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
