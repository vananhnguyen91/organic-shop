import React from "react";
import "../resources/scss/content.scss";
import product_item from "../resources/img/product-thumb.png";

export default function PopularCategories() {
  const data = [];
  for (let index = 1; index < 8; index++) {
    data.push(index);
  }
  return (
    <div className="popular-categories-section w-full">
      <div className="product-header">
        <div>Popular categories</div>
        <button className="bg-primary">View all</button>
      </div>
      <div className="popular_categories_list">
        {data.map((item) => {
          return (
            <div className="popular_categories_item" key={item}>
              <div
                style={{
                  background: `url(${product_item}) lightgray 50% / cover no-repeat`,
                }}
              />
              <p>Fruits & Veges</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
