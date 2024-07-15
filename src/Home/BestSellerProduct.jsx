import React, { useState } from "react";
import ProductItem from "./ProductItem";
import "../resources/scss/content.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function BestSellerProduct() {
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
    <div className="best-seller-product-section w-full">
      <div className="product-header">
        <div>Best selling products</div>
        <div>
          <Button
            onClick={() => carouselRef.previous()}
            className="small mr-[13.85px] bg-lightgray_F1F1F1"
            icon={<LeftOutlined className="text-black_333" />}
          />
          <Button
            onClick={() => carouselRef.next()}
            className="small bg-primary"
            icon={<RightOutlined />}
          />
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
              rateColor="#6BB252"
              key={item}
            />
          );
        })}
      </Carousel>
    </div>
  );
}
