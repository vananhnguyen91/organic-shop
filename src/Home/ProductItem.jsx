import React from "react";
import product_item from "../resources/img/product-thumb-1.png";
import { Button, InputNumber, Rate } from "antd";
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
  return (
    <div
      className="flex xs:w-1/2 w-1/5 p-2.5 flex-col justify-center items-center gap-5 hover:absolute hover:rounded-[20px] hover:shadow-product_item"
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
    >
      <div
        className="product-image xs:w-[80px] w-[210px] aspect-square"
        style={{
          background: `url(${product_item}) lightgray 50% / cover no-repeat`,
        }}
      />
      <div className="product-info flex flex-col justify-center items-center gap-1 self-stretch">
        <p className="product-name text-black_300 text-center font-base font-normal leading-[170%] capitalize">
          Munch Crunchy Cookies
        </p>
        <div className="product-price flex justify-center items-center gap-2 font-open_sans">
          <span className="price-origin text-[15px] xs:text-[10px] text-[#777] font-semibold leading-[100%] line-through capitalize">
            $11.00
          </span>
          <span className="price-sale text-[#131313] text-[17px] xs:text-[12px] font-semibold leading-[100%] capitalize">
            $8.00
          </span>
          <span className="rate-sale flex justify-center items-center gap-2.5 border border-solid border-[#c2c2c2] text-[#a5a5a5] font-semibold leading-[100%] xs:text-[10px] py-[4px] px-[7px] capitalize">
            10% OFF
          </span>
        </div>
        <div className="product-rate flex justify-center items-center gap-2.5">
          <Rate
            allowHalf
            defaultValue={4.5}
            className="text-[20px] xs:text-[12px]"
            style={{ color: rateColor }}
          />
          <span className="quantity text-[#a5a5a5] font-open_sans capitalize font-semibold leading-[100%] text-[15px] xs:text-[12px]">
            (221)
          </span>
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
    </div>
  );
}
