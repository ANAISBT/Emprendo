// src/components/DynamicProductList.js
import React from "react";
import ProductItem from "./ProductItem";

function DynamicProductList({ products }) {
  return (
    <div className="product--list--container">
      {products.map((product, index) => (
        <ProductItem
          key={index}
          category={product.category}
          name={product.name}
          desc={product.desc}
          price={product.price}
          imgURL={product.imgURL}
        />
      ))}
    </div>
  );
}

export default DynamicProductList;
