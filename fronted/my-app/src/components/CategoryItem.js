import React from "react";
import "./CSS/CategoryItem.css";

const CategoryItem = ({ imgURL, title }) => {
  return (
    <div className="category--item">
      <div className="category--item--image">
        <img
          className="category--item--image--container"
          alt={`category-${title}`}
          src={
            imgURL ||
            "https://d20f60vzbd93dl.cloudfront.net/uploads/tienda_012149/tienda_012149_c20d47bc998940f0ef7020ad21d1916bda134db7_producto_large_90.jpg?not-from-cache-please"
          }
        ></img>
      </div>
      <p className="category--item--layout">{title}</p>
    </div>
  );
};

export default CategoryItem;
