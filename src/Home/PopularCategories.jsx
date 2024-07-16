import React from "react";
import "../resources/scss/content.scss";
import product_item from "../resources/img/product_thumb.png";
import arrow_right from "../resources/icons/arrow_right.svg";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function PopularCategories() {
  let carouselRef = null;
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
      <div className="product-header flex py-7 px-2.5 xs:justify-start justify-between xs:flex-col xs:items-start items-center w-full xs:gap-5">
        <div className="text-nowrap  text-black_200 text-[32px] font-normal capitalize">
          Popular categories
        </div>
        <div className="flex xs:justify-between xs:w-full justify-end items-center xs:gap-2 gap-10">
          <div className="flex xs:justify-end justify-start items-center xs:gap-0 gap-8">
            <span className="text-base font-semibold capitalize text-[#787878] text-nowrap font-['Open_Sans']">
              View All Categories
            </span>
            <img src={arrow_right} alt="arrow_right" />
          </div>
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
            <div className="popular_categories_item " key={item}>
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
