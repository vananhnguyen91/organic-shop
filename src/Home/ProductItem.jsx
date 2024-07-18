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
  responsive = false,
  rateColor = "#FFC43F",
  toggleHover = () => {},
  hovered = false,
}) {
  const colSetting = responsive
    ? {
        xs: 12,
        md: 8,
        lg: 4,
      }
    : {};
  return (
    <Col
      {...colSetting}
      className="flex p-2.5 flex-col justify-center items-center gap-5 hover:absolute hover:rounded-[20px] hover:shadow-product_item"
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
    >
      <div
        className="product-image xs:w-[80px] w-[210px] aspect-square"
        style={{
          background: `url(${product_item}) lightgray 50% / cover no-repeat`,
        }}
      />
      <div className="product-info">
        <p className="product-name">Munch Crunchy Cookies</p>
        <div className="product-price">
          <span className="price-origin text-[15px] xs:text-[10px]">
            $11.00
          </span>
          <span className="price-sale text-[17px] xs:text-[12px]">$8.00</span>
          <span className="rate-sale xs:text-[10px] py-[4px] px-[7px]">
            10% OFF
          </span>
        </div>
        <div className="product-rate">
          <Rate
            allowHalf
            defaultValue={4.5}
            className="text-[20px] xs:text-[12px]"
            style={{ color: rateColor }}
          />
          <span className="quantity text-[15px] xs:text-[12px]">(221)</span>
        </div>
      </div>
      {hovered && (
        <>
          <div className="product-quantity justify-center items-center w-full xs:text-[12px] flex gap-2.5 text-[#222222]">
            <Button icon={<MinusOutlined />} />
            <InputNumber defaultValue={3} />
            <Button icon={<PlusOutlined />} />
          </div>
          <div className="product-add-to-cart justify-center items-center w-full xs:text-[12px] flex gap-2 text-[#222222] font-semibold">
            <Button
              className="uppercase xs:text-[12px] small"
              icon={<ShoppingOutlined />}
            >
              Add to cart
            </Button>
            <Button className="small" icon={<HeartOutlined />} />
          </div>
        </>
      )}
    </Col>
  );
}
