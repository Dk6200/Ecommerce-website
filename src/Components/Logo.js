import React from "react";
import { Link } from "react-router-dom";
import logo from "./Assets/bag.png";

const Logo = () => {
  return (
    <Link to="/" className="text-red text-xl font-semibold hover:text-red-600">
      <div className="flex items-center">
        <div className="bg-white p-2 rounded flex items-center">
          <img src={logo} alt="logo" className="mr-2 h-8 w-8" />
          <span className="hidden md:inline-block">Smart Deals</span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
