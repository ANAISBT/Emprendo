import React from "react";
import "./CSS/ProductItem.css";

const ProductItem = ({ name, imgURL, desc, category, price }) => {
  return (
    <div className="product--item">
      <div className="product--item--image">
        <img
          className="product--item--image--container"
          alt={name}
          src={
            imgURL ||
            "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/883096368_1/w=1500,h=1500,fit=pad"
          }
        ></img>
      </div>
      <div className="product--item--layout">
        <p className="product--item--layout--category">{category}</p>
        <p className="product--item--layout--name">{name}</p>
        <p className="product--item--layout--description">{desc}</p>
      </div>

      <strong className="product--item--price">S./.{price.toFixed(2)}</strong>
    </div>
  );
};

export default ProductItem;
