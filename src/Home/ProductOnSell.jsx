import React, { useState } from "react";
import ProductItem from "./ProductItem";
import "../resources/scss/content.scss";
import { Button } from "antd";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export default function ProductOnSell() {
  const [hovered, setHovered] = useState(0);
  const toggleHover = (item, value) => setHovered(value ? item : 0);
  let carouselRef = null;
  const data = [];
  for (let index = 1; index < 16; index++) {
    data.push(index);
  }
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <div className="product-on-sell-section w-full">
      <div className="product-header flex py-7 px-2.5 xs:justify-start justify-between xs:flex-col xs:items-start items-center w-full xs:gap-5">
        <div className="text-nowrap  text-black_200 text-[32px] font-normal capitalize">
          products on Sale
        </div>
        <div className="flex xs:justify-between xs:w-full justify-end items-center xs:gap-2 gap-10">
          <div></div>
          <div className="xs:flex xs:justify-between">
            <Button
              onClick={() => carouselRef.previous()}
              className="small xs:mr-2 mr-[13.85px] text-black_200 bg-lightgray_F1F1F1 py-[15px] px-5 items-center rounded-[10px] text-base	 leading-[100%] tracking-[1.12px] uppercase"
              icon={<LeftOutlined className="text-black_300" />}
            />
            <Button
              onClick={() => carouselRef.next()}
              className="small bg-primary xs:mr-2 mr-[13.85px] text-white_100  py-[15px] px-5 items-center rounded-[10px] text-base	 leading-[100%] tracking-[1.12px] uppercase"
              icon={<RightOutlined />}
            />
          </div>
        </div>
      </div>
      <Carousel
        responsive={responsive}
        arrows={false}
        ref={(el) => (carouselRef = el)}
        className="popular_categories_list"
      >
        {data.map((item) => {
          return (
            <ProductItem
              toggleHover={(value) => toggleHover(item, value)}
              hovered={hovered === item ? true : false}
              key={item}
            />
          );
        })}
      </Carousel>
    </div>
  );
}
