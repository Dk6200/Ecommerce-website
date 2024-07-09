import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const ItemList = (props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 p-14">
      {props.itemList.length > 0 ? (
        props.itemList.map((item) => (
          <Link to={`/product/${item.id}`}>
            <Card key={item.id} product={item} />
          </Link>
        ))
      ) : (
        <div>No items found.</div>
      )}
    </div>
  );
};

export default ItemList;
