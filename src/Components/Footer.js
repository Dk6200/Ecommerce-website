import React from "react";
import logo from "./Assets/bag.png";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-red text-white p-8 h-30 bottom-0 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex">
          <Logo />
        </div>
        <div className="flex justify-between items-center space-x-4 font-semibold  p-2 rounded">
          <p className="m-0 p-2 bg-white text-red rounded hover:bg-red-700 transition duration-300 cursor-pointer">
            Bangalore
          </p>
          <p className="m-0 p-2 bg-white text-red rounded hover:bg-red-700 transition duration-300 cursor-pointer">
            Hyderabad
          </p>
          <p className="m-0 p-2 bg-white text-red rounded hover:bg-red-700 transition duration-300 cursor-pointer">
            Mumbai
          </p>
          <p className="m-0 p-2 bg-white text-red rounded hover:bg-red-700 transition duration-300 cursor-pointer">
            Delhi
          </p>
        </div>

        <div className="font-bold">
          <p>Contact us:</p>
          <p>Phone: +1 123-456-7890</p>
          <p>Email: shophere@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
