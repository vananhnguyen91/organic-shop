import React from "react";
import "../resources/scss/content.scss";
import product_item from "../resources/img/product-thumb.png";
import arrow_right from "../resources/icons/arrow_right.svg";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function PopularCategories() {
  let carouselRef = null
  const data = [];
  for (let index = 1; index < 16; index++) {
    data.push(index);
  }
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <div className="popular-categories-section w-full">
      <div className="product-header">
        <div>Popular categories</div>
        <div className="flex justify-end items-center gap-10">
          <div className="flex justify-start items-center gap-8">
            <span className="text-base font-semibold capitalize text-[#787878] font-['Open_Sans']">
              View All Categories{" "}
            </span>
            <img src={arrow_right} alt="arrow_right" />
          </div>
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
      </div>
      <Carousel
        responsive={responsive}
        arrows={false}
        ref={(el) => (carouselRef = el)}
        className="popular_categories_list"
      >
        {data.map((item) => {
          return (
            <div className="popular_categories_item" key={item}>
              <div
                style={{
                  background: `url(${product_item}) lightgray 50% / cover no-repeat`,
                }}
              />
              <p>Fruits & Veges</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
