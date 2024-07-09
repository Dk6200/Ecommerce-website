import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md overflow-hidden rounded-md mb-4 mt-4 h-full">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain object-center"
      />
      <div className="px-6 py-4 h-full">
        <div className="font-bold text-xm mb-4">{product.title}</div>
        <div className="mt-4 flex items-center justify-between ">
          <span className="font-semibold text-red">₹{product.price}</span>
          <div className="flex items-center">
            <span className="text-red font-semibold">
              {product.rating.rate}{" "}
              <span className="text-yellow-500 pl-1 mr-2">&#9733;</span>
            </span>
            <span className="text-black font-semibold ml-1">
              ({product.rating.count} ratings)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
