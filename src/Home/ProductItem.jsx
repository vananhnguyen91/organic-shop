import React from "react";
import product_item from "../resources/img/product_item.png";
import { Rate } from "antd";

export default function ProductItem() {
  return (
    <div>
      <div>
        <img src={product_item} alt="product item" />
      </div>
      <p>Munch Crunchy Cookies</p>
      <div>
        <span>$11.00</span>
        <span>$8.00</span>
        <span>10% OFF</span>
      </div>
      <div>
        <Rate allowHalf defaultValue={4.5} />
        <span>(221)</span>
      </div>
    </div>
  );
}
