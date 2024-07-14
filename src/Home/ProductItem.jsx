import React from "react";
import product_item from "../resources/img/product-thumb-1.png";
import { Col, Rate } from "antd";

export default function ProductItem() {
  return (
    <Col span={4} className="product-item">
      <div
        className="product-image"
        style={{
          background: `url(${product_item}) lightgray 50% / cover no-repeat`,
        }}
      />
      <div className="product-info">
        <p className="product-name">Munch Crunchy Cookies</p>
        <div className="product-price">
          <span className="price-origin">$11.00</span>
          <span className="price-sale">$8.00</span>
          <span className="rate-sale">10% OFF</span>
        </div>
        <div className="product-rate">
          <Rate allowHalf defaultValue={4.5} style={{ fontSize: 20 }} />
          <span className="quantity">(221)</span>
        </div>
      </div>
    </Col>
  );
}
