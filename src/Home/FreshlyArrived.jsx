import React, { useState } from "react";
import ProductItem from "./ProductItem";
import "../resources/scss/content.scss";
import { Row } from "antd";

export default function FreshlyArrived() {
  const [hovered, setHovered] = useState(0);
  const toggleHover = (item, value) => setHovered(value ? item : 0);
  const data = [];
  for (let index = 1; index < 16; index++) {
    data.push(index);
  }
  return (
    <div className="freshly-arrived-section">
      <div className="product-header">
        <div>Freshly arrived</div>
        <button className="bg-primary">View all</button>
      </div>
      <Row style={{ width: "100%" }} gutter={30}>
        {data.map((item) => {
          return (
            <ProductItem
              hovered={hovered === item ? true : false}
              toggleHover={(value) => toggleHover(item, value)}
              colSpan={4}
              key={item}
            />
          );
        })}
      </Row>
    </div>
  );
}
