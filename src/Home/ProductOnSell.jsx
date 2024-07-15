import React from "react";
import ProductItem from "./ProductItem";
import "../resources/scss/content.scss";
import { Button } from "antd";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export default function ProductOnSell() {
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
      <div className="product-header">
        <div>products on Sale</div>
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
          return <ProductItem key={item} />;
        })}
      </Carousel>
    </div>
  );
}
