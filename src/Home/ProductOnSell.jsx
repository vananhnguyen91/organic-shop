import React from "react";
import ProductItem from "./ProductItem";
import "../resources/scss/content.scss";
import { Row } from "antd";

export default function ProductOnSell() {
  const data = [];
  for (let index = 0; index < 6; index++) {
    data.push(index);
  }
  return (
    <>
      <div className="product-header">
        <div>products on Sale</div>
        <button className="bg-primary">View all</button>
      </div>
      <Row style={{ width: "100%" }} gutter={30}>
        {data.map((item) => {
          return <ProductItem key={item} />;
        })}
      </Row>
    </>
  );
}
