import React from "react";
import ProductItem from "./ProductItem";
export default function BestSellerProduct() {
  const data = [];
  for (let index = 0; index < 5; index++) {
    data.push(index);
  }
  return (
    <div className="flex ">
      {data.map((item) => {
        return <ProductItem key={item} />;
      })}
    </div>
  );
}
