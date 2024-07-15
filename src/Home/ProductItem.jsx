import React from "react";
import product_item from "../resources/img/product-thumb-1.png";
import { Button, Col, InputNumber, Rate } from "antd";
import {
  HeartOutlined,
  MinusOutlined,
  PlusOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

export default function ProductItem({
  colSpan,
  rateColor = "#FFC43F",
  toggleHover = () => {},
  hovered = false,
}) {
  return (
    <Col
      span={colSpan ? colSpan : undefined}
      className="product-item"
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
    >
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
          <Rate
            allowHalf
            defaultValue={4.5}
            style={{ fontSize: 20, color: rateColor }}
          />
          <span className="quantity">(221)</span>
        </div>
      </div>
      {hovered && (
        <>
          <div className="product-quantity flex gap-2.5 text-[#222222]">
            <Button icon={<MinusOutlined />} />
            <InputNumber defaultValue={3} />
            <Button icon={<PlusOutlined />} />
          </div>
          <div className="product-add-to-cart flex gap-2 text-[#222222] font-semibold">
            <Button className="uppercase" icon={<ShoppingOutlined />}>
              Add to cart
            </Button>
            <Button icon={<HeartOutlined />} />
          </div>
        </>
      )}
    </Col>
  );
}
