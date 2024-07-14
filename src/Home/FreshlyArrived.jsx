import React from "react";
import ProductItem from "./ProductItem";

export default function FreshlyArrived() {
  const data = [];
  for (let index = 0; index < 15; index++) {
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
