import React, { useState } from "react";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import ItemList from "./ItemList";
import ProductDetails from "./ProductDetails";
import Data from "../Data/data";
import Footer from "./Footer";
import ProceedCheckout from "./ProceedCheckout";

const Wrapper = () => {
  const [filteredData, setFilteredData] = useState(Data);

  const handleSearch = (search) => {
    const filteredResults = Data.filter((item) => {
      return item.title.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredData(filteredResults);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header handleSearch={handleSearch} />

      <hr />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<ItemList itemList={filteredData} />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/proceedCheckout" element={<ProceedCheckout />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default Wrapper;
